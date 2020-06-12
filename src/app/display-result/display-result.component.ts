import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { ShapeUpServiceService } from '../shape-up-service.service';
import { Shapes } from '../Classes/Shapes';
import { Projects } from '../Classes/projects';
import { Points } from '../Classes/Points';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  area=new Shapes();
  shapes= Array<Shapes>();
  point=new Points();
  shape=new Shapes();
  currentProject=new Projects();
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;

  getShapes(){
    this.resultService.GetShapes(2002).subscribe((data: Array<Shapes>)=>
      {
        data.forEach((element) => {
          console.log(element);
          if(element.area == true){
            this.area.id=element.id;
            this.area.area=element.area;
            this.area.unit=element.unit;
            this.area.result.pointOfShapeX=element.result.pointOfShapeX;
            this.area.result.pointOfShapeY=element.result.pointOfShapeY;
            this.area.result.pointOnAreaX=element.result.pointOnAreaX;
            this.area.result.pointOnAreaY=element.result.pointOnAreaY;
            element.points.forEach(e => {
              this.point.id=e.id;
              this.point.x=e.x;
              this.point.y=e.y;
              this.area.points.push(this.point);
              this.point=new Points();
            });

          }
          else{
            this.shape.id=element.id;
            this.shape.area=element.area;
            this.shape.unit=element.unit;
            this.shape.result.pointOfShapeX=element.result.pointOfShapeX;
            this.shape.result.pointOfShapeY=element.result.pointOfShapeY;
            this.shape.result.pointOnAreaX=element.result.pointOnAreaX;
            this.shape.result.pointOnAreaY=element.result.pointOnAreaY;
            element.points.forEach(e => {
              this.point.id=e.id;
              this.point.x=e.x;
              this.point.y=e.y;
              this.shape.points.push(this.point);
              this.point=new Points();
            });
            this.shapes.push(this.shape);
            this.shape=new Shapes();
          }
      });
      this.drawShapes(this.area, this.shapes);
      });
  }
  constructor(@Inject(DOCUMENT) document, private resultService: ShapeUpServiceService) { 
  }
  Resize(area :Shapes) {
    // for (var x = 0.5; x < 600; x += 10) {
    //   this.ctx.moveTo(x, 0);
    //   this.ctx.lineTo(x, 300);
    // }
    // for (var y = 0.5; y < 300; y += 10) {
    //   this.ctx.moveTo(0, y);
    //   this.ctx.lineTo(600, y);
    // }
    // this.ctx.strokeStyle = "#eee";
    // this.ctx.stroke();
    // this.ctx.save();
    let minX=0;
    let maxX=0;
    let minY=0;
    let maxY=0;
    let i=0;
    for (let p of area.points) {
      if(p.x>area.points[maxX].x){
        maxX=i;
      }
      else if(p.x<area.points[maxX].x){
        minX=i;
      }
      if(p.y>area.points[maxY].y){
        maxY=i;
      }
      else if(p.y<area.points[maxY].y){
        minY=i;
      }
      i++;
    }
    let height=area.points[maxY].y-area.points[minY].y;
    let width=area.points[maxX].x-area.points[minX].x;
    this.ctx.canvas.height=height*40;
    this.ctx.canvas.width=width*40;  
  }
 
  drawShapes(area:Shapes, shapes:Shapes[]){
    this.Resize(area);
    this.ctx.beginPath();
    shapes.forEach((element) => {
      let xDist=element.result.pointOfShapeX-element.result.pointOnAreaX;
      let yDist=element.result.pointOfShapeY-element.result.pointOnAreaY;
      let points=element.points;
      this.ctx.moveTo((points[0].x-xDist)*40, this.ctx.canvas.height-((points[0].y-yDist)*40));
      for(let p of points){
        this.ctx.lineTo((p.x-xDist)*40, this.ctx.canvas.height-((p.y-yDist)*40));
      }
      this.ctx.lineTo((points[0].x-xDist)*40, this.ctx.canvas.height-((points[0].y-yDist)*40));      
    });
      this.ctx.fillStyle="goldenrod";
      this.ctx.fill();
      this.ctx.strokeStyle="darkblue";
      this.ctx.stroke();
      this.ctx.save();
  }
  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.getShapes();

    // this.canvas.addEventListener('mousedown', function(e) {
    //   this.getCursorPosition(canvas, e)
  //})
  }
//   getCursorPosition(event){
//     const x = event.clientX ;
//     const y = event.clientY;
//     console.log("x: " + (x-8) + " y: " + (y-3))
// }



}
