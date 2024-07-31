### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Beccie, Equip, Griller, Skejs<br />
Global Rank: [128](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
<br />
Final Rank Value:  780.9<br />
<br />
Final Rank Value (780.9) = Starting Rank Value (795.6) + Head To Head Adjustments (-14.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.060[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.6
- 400 + ( ( 0.192 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 795.6


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
|           23 |      347 | 2024-07-21 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -6.60 | AcilioN, Beccie, Equip, Griller, Skejs |
|           22 |      400 | 2024-07-19 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.60 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           21 |      416 | 2024-07-19 | FORZE Reload      | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.038 (0.013)    | 0 (0.000) |     7.12 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           20 |      456 | 2024-07-18 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -21.58 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           19 |      528 | 2024-07-17 | kONO              | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.537 (0.179)    | 0 (0.000) |    17.87 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           18 |      537 | 2024-07-17 | LEON              | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.131 (0.019)    | 0 (0.000) |    11.27 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           17 |      662 | 2024-07-14 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -6.54 | AcilioN, Beccie, Equip, Griller, VireZ |
|           16 |      722 | 2024-07-10 | Insilio           | L   | 1.000      | -            | -                | -                | -         |    -8.70 | Beccie, Equip, Griller, Skejs, VireZ   |
|           15 |      860 | 2024-06-16 | Aurora Young Blud | L   | 0.897      | -            | -                | -                | -         |   -11.12 | Beccie, Equip, Griller, Skejs, VireZ   |
|           14 |      895 | 2024-06-15 | LEON              | W   | 0.891      | 0.143        | 0.007 (0.001)    | 0.131 (0.017)    | 0 (0.000) |     9.89 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |      996 | 2024-06-12 | MASONIC           | W   | 0.871      | 0.143        | 0.009 (0.001)    | 0.087 (0.011)    | 0 (0.000) |    12.80 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |     1012 | 2024-06-11 | CYBERSHOKE        | L   | 0.865      | -            | -                | -                | -         |    -9.90 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |     1108 | 2024-06-09 | Johnny Speeds     | L   | 0.850      | -            | -                | -                | -         |    -2.02 | Equip, Griller, Maze, Skejs, VireZ     |
|           10 |     1558 | 2024-05-28 | Permitta          | L   | 0.771      | -            | -                | -                | -         |    -8.17 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |     1598 | 2024-05-26 | Johnny Speeds     | L   | 0.758      | -            | -                | -                | -         |    -1.62 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |     1692 | 2024-05-22 | ECLOT             | W   | 0.731      | 0.371        | 0.065 (0.018)    | 0.502 (0.136)    | 0 (0.000) |    19.48 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     1955 | 2024-05-15 | kONO              | L   | 0.684      | -            | -                | -                | -         |    -8.17 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     2005 | 2024-05-14 | Zero Tenacity     | L   | 0.678      | -            | -                | -                | -         |    -3.94 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |     2055 | 2024-05-12 | Johnny Speeds     | W   | 0.664      | 0.333        | 0.124 (0.027)    | 0.817 (0.181)    | 0 (0.000) |    19.75 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     2089 | 2024-05-11 | Passion UA        | L   | 0.657      | -            | -                | -                | -         |    -4.19 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     2368 | 2024-04-27 | 777               | L   | 0.565      | -            | -                | -                | -         |   -10.81 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     2500 | 2024-04-21 | Astralis Talent   | L   | 0.524      | -            | -                | -                | -         |    -8.52 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     2507 | 2024-04-20 | Sashi Academy     | W   | 0.520      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.520) |     1.60 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,967.39)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-09 |      0.853 | $1,445.00      | $1,231.91       |
| 2024-05-16 |      0.690 | $1,500.00      | $1,035.20       |
| 2024-04-27 |      0.566 | $795.00        | $450.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
