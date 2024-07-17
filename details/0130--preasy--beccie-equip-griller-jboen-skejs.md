### Roster Details<br />
Team Name: Preasy<br />
Roster: Beccie, Equip, Griller, JBOEN, Skejs<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [130](../standings_global.md)<br />
Regional Rank: [88]( ../standings_europe.md)<br />
Final Rank Value:  810.0<br />
<br />
Final Rank Value (810.0) = Starting Rank Value (819.7) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 819.7
- 400 + ( ( 0.195 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 819.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |        7 | 2024-07-17 | LEON              | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.160 (0.023)    | 0 (0.000) |    11.37 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           17 |      132 | 2024-07-14 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -7.12 | AcilioN, Beccie, Equip, Griller, VireZ |
|           16 |      192 | 2024-07-10 | Insilio           | L   | 1.000      | -            | -                | -                | -         |    -7.63 | Beccie, Equip, Griller, Skejs, VireZ   |
|           15 |      330 | 2024-06-16 | Aurora Young Blud | L   | 0.992      | -            | -                | -                | -         |   -13.86 | Beccie, Equip, Griller, Skejs, VireZ   |
|           14 |      365 | 2024-06-15 | LEON              | W   | 0.985      | 0.143        | 0.010 (0.001)    | 0.160 (0.023)    | 0 (0.000) |    10.96 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |      466 | 2024-06-12 | MASONIC           | W   | 0.965      | 0.143        | 0.014 (0.002)    | 0.109 (0.015)    | 0 (0.000) |    14.41 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |      482 | 2024-06-11 | CYBERSHOKE        | L   | 0.959      | -            | -                | -                | -         |   -12.45 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |      578 | 2024-06-09 | Johnny Speeds     | L   | 0.945      | -            | -                | -                | -         |    -1.72 | Equip, Griller, Maze, Skejs, VireZ     |
|           10 |     1028 | 2024-05-28 | Permitta          | L   | 0.866      | -            | -                | -                | -         |    -8.70 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |     1068 | 2024-05-26 | Johnny Speeds     | L   | 0.852      | -            | -                | -                | -         |    -1.35 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |     1162 | 2024-05-22 | ECLOT             | W   | 0.826      | 0.371        | 0.103 (0.032)    | 0.551 (0.169)    | 0 (0.000) |    22.97 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     1425 | 2024-05-15 | kONO              | L   | 0.778      | -            | -                | -                | -         |    -8.13 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     1475 | 2024-05-14 | Zero Tenacity     | L   | 0.773      | -            | -                | -                | -         |    -4.66 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |     1525 | 2024-05-12 | Johnny Speeds     | W   | 0.758      | 0.333        | 0.162 (0.041)    | 0.852 (0.215)    | 0 (0.000) |    22.95 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     1559 | 2024-05-11 | Passion UA        | L   | 0.751      | -            | -                | -                | -         |    -5.81 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     1838 | 2024-04-27 | 777               | L   | 0.660      | -            | -                | -                | -         |   -12.32 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     1970 | 2024-04-21 | Astralis Talent   | L   | 0.618      | -            | -                | -                | -         |   -11.58 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     1977 | 2024-04-20 | Sashi Academy     | W   | 0.614      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.614) |     3.03 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,070.87)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.947 | $1,445.00      | $1,368.49       |
| 2024-05-16 |      0.785 | $1,500.00      | $1,176.97       |
| 2024-04-27 |      0.661 | $795.00        | $525.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
