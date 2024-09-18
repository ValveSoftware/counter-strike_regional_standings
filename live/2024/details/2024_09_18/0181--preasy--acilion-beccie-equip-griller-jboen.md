### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Beccie, Equip, Griller, JBOEN<br />
Global Rank: [181](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [115]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  635.0<br />
<br />
Final Rank Value (635.0) = Starting Rank Value (722.6) + Head To Head Adjustments (-87.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.6
- 400 + ( ( 0.165 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 722.6


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
|           33 |        5 | 2024-09-18 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -4.34 | AcilioN, Beccie, Equip, Griller, JBOEN |
|           32 |      156 | 2024-09-13 | kONO              | L   | 1.000      | -            | -                | -                | -         |    -8.13 | AcilioN, Beccie, Equip, Griller, JBOEN |
|           31 |      215 | 2024-09-11 | L&G               | L   | 1.000      | -            | -                | -                | -         |   -17.02 | AcilioN, Beccie, Equip, Griller, JBOEN |
|           30 |      881 | 2024-08-22 | CPH Wolves        | L   | 1.000      | -            | -                | -                | -         |    -9.24 | AcilioN, Beccie, Equip, Griller, JBOEN |
|           29 |      923 | 2024-08-21 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |    -7.32 | AcilioN, Beccie, Equip, Griller, JBOEN |
|           28 |     1041 | 2024-08-18 | ECLOT             | L   | 0.992      | -            | -                | -                | -         |    -4.78 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           27 |     1138 | 2024-08-14 | Permitta          | L   | 0.967      | -            | -                | -                | -         |    -6.54 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           26 |     1226 | 2024-08-12 | Monte Gen         | L   | 0.953      | -            | -                | -                | -         |    -7.88 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           25 |     1304 | 2024-08-09 | Project G         | L   | 0.932      | -            | -                | -                | -         |   -20.78 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           24 |     1367 | 2024-08-07 | The Suspect       | L   | 0.920      | -            | -                | -                | -         |   -10.10 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           23 |     1434 | 2024-08-05 | Young Ninjas      | L   | 0.907      | -            | -                | -                | -         |   -10.68 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           22 |     1961 | 2024-07-21 | TSM               | L   | 0.806      | -            | -                | -                | -         |    -3.92 | AcilioN, Beccie, Equip, Griller, Skejs |
|           21 |     2014 | 2024-07-19 | Johnny Speeds     | L   | 0.794      | -            | -                | -                | -         |    -2.61 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           20 |     2030 | 2024-07-19 | FORZE Reload      | W   | 0.793      | 0.333        | 0.000 (0.000)    | 0.029 (0.008)    | 0 (0.000) |     6.26 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           19 |     2070 | 2024-07-18 | Into the Breach   | L   | 0.787      | -            | -                | -                | -         |    -6.88 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           18 |     2142 | 2024-07-17 | kONO              | W   | 0.781      | 0.333        | 0.030 (0.008)    | 0.553 (0.144)    | 0 (0.000) |    15.76 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           17 |     2151 | 2024-07-17 | LEON              | W   | 0.780      | 0.143        | 0.005 (0.001)    | 0.068 (0.008)    | 0 (0.000) |     9.75 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           16 |     2276 | 2024-07-14 | Passion UA        | L   | 0.758      | -            | -                | -                | -         |    -3.70 | AcilioN, Beccie, Equip, Griller, VireZ |
|           15 |     2336 | 2024-07-10 | Insilio           | L   | 0.733      | -            | -                | -                | -         |    -4.81 | Beccie, Equip, Griller, Skejs, VireZ   |
|           14 |     2474 | 2024-06-16 | Aurora Young Blud | L   | 0.572      | -            | -                | -                | -         |    -4.46 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |     2509 | 2024-06-15 | LEON              | W   | 0.566      | 0.143        | 0.005 (0.000)    | 0.068 (0.005)    | 0 (0.000) |     7.19 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |     2610 | 2024-06-12 | MASONIC           | W   | 0.546      | 0.143        | 0.004 (0.000)    | 0.036 (0.003)    | 0 (0.000) |     7.20 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |     2626 | 2024-06-11 | CYBERSHOKE        | L   | 0.540      | -            | -                | -                | -         |    -4.07 | Beccie, Equip, Griller, Skejs, VireZ   |
|           10 |     3172 | 2024-05-28 | Permitta          | L   | 0.446      | -            | -                | -                | -         |    -3.43 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |     3212 | 2024-05-26 | Johnny Speeds     | L   | 0.433      | -            | -                | -                | -         |    -1.36 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |     3306 | 2024-05-22 | ECLOT             | W   | 0.406      | 0.371        | 0.081 (0.012)    | 0.758 (0.114)    | 0 (0.000) |    11.71 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     3569 | 2024-05-15 | kONO              | L   | 0.359      | -            | -                | -                | -         |    -3.52 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     3619 | 2024-05-14 | Zero Tenacity     | L   | 0.353      | -            | -                | -                | -         |    -1.41 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |     3669 | 2024-05-12 | Johnny Speeds     | W   | 0.339      | 0.333        | 0.103 (0.012)    | 0.949 (0.107)    | 0 (0.000) |     9.69 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     3703 | 2024-05-11 | Passion UA        | L   | 0.332      | -            | -                | -                | -         |    -1.54 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     3982 | 2024-04-27 | 777               | L   | 0.240      | -            | -                | -                | -         |    -4.36 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     4114 | 2024-04-21 | Astralis Talent   | L   | 0.199      | -            | -                | -                | -         |    -3.16 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     4121 | 2024-04-20 | Sashi Academy     | W   | 0.195      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.195) |     0.86 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,740.70)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.801 | $1,250.00      | $1,001.16       |
| 2024-05-16 |      0.365 | $1,500.00      | $547.66         |
| 2024-04-27 |      0.241 | $795.00        | $191.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
