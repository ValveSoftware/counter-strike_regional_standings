### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Beccie, Equip, Griller, Skejs<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [129](../standings_global.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
Final Rank Value:  784.0<br />
<br />
Final Rank Value (784.0) = Starting Rank Value (806.2) + Head To Head Adjustments (-22.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.2
- 400 + ( ( 0.201 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 806.2


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
|           23 |      105 | 2024-07-21 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -7.64 | AcilioN, Beccie, Equip, Griller, Skejs |
|           22 |      158 | 2024-07-19 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.50 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           21 |      174 | 2024-07-19 | FORZE Reload      | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.041 (0.014)    | 0 (0.000) |     7.01 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           20 |      214 | 2024-07-18 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -24.65 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           19 |      286 | 2024-07-17 | kONO              | W   | 1.000      | 0.333        | 0.036 (0.012)    | 0.559 (0.186)    | 0 (0.000) |    18.03 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           18 |      295 | 2024-07-17 | LEON              | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.149 (0.021)    | 0 (0.000) |    11.07 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           17 |      420 | 2024-07-14 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -6.99 | AcilioN, Beccie, Equip, Griller, VireZ |
|           16 |      480 | 2024-07-10 | Insilio           | L   | 1.000      | -            | -                | -                | -         |    -8.51 | Beccie, Equip, Griller, Skejs, VireZ   |
|           15 |      618 | 2024-06-16 | Aurora Young Blud | L   | 0.944      | -            | -                | -                | -         |   -12.70 | Beccie, Equip, Griller, Skejs, VireZ   |
|           14 |      653 | 2024-06-15 | LEON              | W   | 0.938      | 0.143        | 0.009 (0.001)    | 0.149 (0.020)    | 0 (0.000) |    10.14 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |      754 | 2024-06-12 | MASONIC           | W   | 0.918      | 0.143        | 0.012 (0.002)    | 0.100 (0.013)    | 0 (0.000) |    13.61 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |      770 | 2024-06-11 | CYBERSHOKE        | L   | 0.912      | -            | -                | -                | -         |   -12.51 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |      866 | 2024-06-09 | Johnny Speeds     | L   | 0.898      | -            | -                | -                | -         |    -2.05 | Equip, Griller, Maze, Skejs, VireZ     |
|           10 |     1316 | 2024-05-28 | Permitta          | L   | 0.819      | -            | -                | -                | -         |    -8.81 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |     1356 | 2024-05-26 | Johnny Speeds     | L   | 0.805      | -            | -                | -                | -         |    -1.63 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |     1450 | 2024-05-22 | ECLOT             | W   | 0.779      | 0.371        | 0.084 (0.024)    | 0.510 (0.147)    | 0 (0.000) |    20.96 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     1713 | 2024-05-15 | kONO              | L   | 0.731      | -            | -                | -                | -         |    -8.50 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     1763 | 2024-05-14 | Zero Tenacity     | L   | 0.726      | -            | -                | -                | -         |    -4.53 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |     1813 | 2024-05-12 | Johnny Speeds     | W   | 0.711      | 0.333        | 0.154 (0.036)    | 0.858 (0.203)    | 0 (0.000) |    21.23 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     1847 | 2024-05-11 | Passion UA        | L   | 0.704      | -            | -                | -                | -         |    -4.83 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     2126 | 2024-04-27 | 777               | L   | 0.612      | -            | -                | -                | -         |   -11.83 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     2258 | 2024-04-21 | Astralis Talent   | L   | 0.571      | -            | -                | -                | -         |    -9.29 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     2265 | 2024-04-20 | Sashi Academy     | W   | 0.567      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.567) |     2.78 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,144.25)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-09 |      0.900 | $1,445.00      | $1,300.25       |
| 2024-05-16 |      0.737 | $1,500.00      | $1,106.14       |
| 2024-04-27 |      0.614 | $795.00        | $487.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
