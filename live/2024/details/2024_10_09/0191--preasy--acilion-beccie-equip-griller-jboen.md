### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Beccie, Equip, Griller, JBOEN<br />
Global Rank: [191](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [122]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  620.9<br />
<br />
Final Rank Value (620.9) = Starting Rank Value (712.3) + Head To Head Adjustments (-91.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.3
- 400 + ( ( 0.162 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 712.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       69 | 2024-10-07 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.86 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           39 |      131 | 2024-10-05 | Heimo             | L   | 1.000      | -            | -                | -                | -         |   -15.90 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           38 |      165 | 2024-10-04 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |    -4.15 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           37 |      201 | 2024-10-03 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -3.06 | AcilioN, Beccie, BøghmagiC, Equip, Griller |
|           36 |      270 | 2024-10-01 | KOI               | L   | 1.000      | -            | -                | -                | -         |    -6.44 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           35 |      294 | 2024-10-01 | NAVI Junior       | W   | 1.000      | 0.333        | 0.086 (0.029)    | 0.518 (0.173)    | 0 (0.000) |    27.45 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           34 |      632 | 2024-09-22 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |    -9.64 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           33 |      748 | 2024-09-18 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -4.56 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           32 |      899 | 2024-09-13 | kONO              | L   | 1.000      | -            | -                | -                | -         |    -8.51 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           31 |      958 | 2024-09-11 | L&G               | L   | 1.000      | -            | -                | -                | -         |   -12.09 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           30 |     1624 | 2024-08-22 | CPH Wolves        | L   | 0.879      | -            | -                | -                | -         |    -7.23 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           29 |     1666 | 2024-08-21 | FAVBET            | L   | 0.873      | -            | -                | -                | -         |    -5.75 | AcilioN, Beccie, Equip, Griller, JBOEN     |
|           28 |     1784 | 2024-08-18 | ECLOT             | L   | 0.851      | -            | -                | -                | -         |    -2.76 | Beccie, Equip, Griller, JBOEN, Skejs       |
|           27 |     1881 | 2024-08-14 | Permitta          | L   | 0.826      | -            | -                | -                | -         |    -5.82 | Beccie, Equip, JBOEN, Skejs, tOPZ          |
|           26 |     1969 | 2024-08-12 | Monte Gen         | L   | 0.813      | -            | -                | -                | -         |    -6.86 | Beccie, Equip, JBOEN, Skejs, tOPZ          |
|           25 |     2047 | 2024-08-09 | Project G         | L   | 0.792      | -            | -                | -                | -         |   -17.68 | Beccie, Equip, JBOEN, Skejs, tOPZ          |
|           24 |     2110 | 2024-08-07 | The Suspect       | L   | 0.780      | -            | -                | -                | -         |    -9.47 | Beccie, Equip, JBOEN, Skejs, tOPZ          |
|           23 |     2177 | 2024-08-05 | Young Ninjas      | L   | 0.767      | -            | -                | -                | -         |    -9.90 | Beccie, Equip, JBOEN, Skejs, tOPZ          |
|           22 |     2704 | 2024-07-21 | TSM               | L   | 0.665      | -            | -                | -                | -         |    -3.63 | AcilioN, Beccie, Equip, Griller, Skejs     |
|           21 |     2757 | 2024-07-19 | Johnny Speeds     | L   | 0.654      | -            | -                | -                | -         |    -2.54 | Beccie, Equip, Griller, JBOEN, Skejs       |
|           20 |     2773 | 2024-07-19 | FORZE Reload      | W   | 0.653      | 0.333        | 0.000 (0.000)    | 0.021 (0.005)    | 0 (0.000) |     4.70 | Beccie, Equip, Griller, JBOEN, Skejs       |
|           19 |     2813 | 2024-07-18 | Into the Breach   | L   | 0.647      | -            | -                | -                | -         |    -4.91 | Beccie, Equip, Griller, JBOEN, Skejs       |
|           18 |     2885 | 2024-07-17 | kONO              | W   | 0.640      | 0.333        | 0.024 (0.005)    | 0.416 (0.089)    | 0 (0.000) |    12.88 | Beccie, Equip, Griller, JBOEN, Skejs       |
|           17 |     2894 | 2024-07-17 | LEON              | W   | 0.639      | 0.143        | 0.004 (0.000)    | 0.039 (0.004)    | 0 (0.000) |     7.83 | Beccie, Equip, Griller, JBOEN, Skejs       |
|           16 |     3019 | 2024-07-14 | Passion UA        | L   | 0.618      | -            | -                | -                | -         |    -2.64 | AcilioN, Beccie, Equip, Griller, VireZ     |
|           15 |     3079 | 2024-07-10 | Insilio           | L   | 0.592      | -            | -                | -                | -         |    -4.18 | Beccie, Equip, Griller, Skejs, VireZ       |
|           14 |     3217 | 2024-06-16 | Aurora Young Blud | L   | 0.432      | -            | -                | -                | -         |    -3.95 | Beccie, Equip, Griller, Skejs, VireZ       |
|           13 |     3252 | 2024-06-15 | LEON              | W   | 0.425      | 0.143        | 0.004 (0.000)    | 0.039 (0.002)    | 0 (0.000) |     5.25 | Beccie, Equip, Griller, Skejs, VireZ       |
|           12 |     3353 | 2024-06-12 | MASONIC           | W   | 0.405      | 0.143        | 0.001 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     4.45 | Beccie, Equip, Griller, Skejs, VireZ       |
|           11 |     3369 | 2024-06-11 | CYBERSHOKE        | L   | 0.400      | -            | -                | -                | -         |    -2.68 | Beccie, Equip, Griller, Skejs, VireZ       |
|           10 |     3915 | 2024-05-28 | Permitta          | L   | 0.306      | -            | -                | -                | -         |    -2.31 | Beccie, Equip, Griller, Skejs, VireZ       |
|            9 |     3955 | 2024-05-26 | Johnny Speeds     | L   | 0.292      | -            | -                | -                | -         |    -1.18 | Beccie, Equip, Griller, Skejs, VireZ       |
|            8 |     4049 | 2024-05-22 | ECLOT             | W   | 0.266      | 0.371        | 0.095 (0.009)    | 0.728 (0.072)    | 0 (0.000) |     7.93 | Beccie, Equip, Griller, Skejs, VireZ       |
|            7 |     4312 | 2024-05-15 | kONO              | L   | 0.218      | -            | -                | -                | -         |    -2.41 | Beccie, Equip, Griller, Skejs, VireZ       |
|            6 |     4362 | 2024-05-14 | Zero Tenacity     | L   | 0.213      | -            | -                | -                | -         |    -0.94 | AcilioN, Beccie, Equip, Griller, VireZ     |
|            5 |     4412 | 2024-05-12 | Johnny Speeds     | W   | 0.198      | 0.333        | 0.121 (0.008)    | 1.000 (0.066)    | 0 (0.000) |     5.47 | Beccie, Equip, Griller, Skejs, VireZ       |
|            4 |     4446 | 2024-05-11 | Passion UA        | L   | 0.191      | -            | -                | -                | -         |    -0.74 | Beccie, Equip, Griller, Skejs, VireZ       |
|            3 |     4725 | 2024-04-27 | 777               | L   | 0.100      | -            | -                | -                | -         |    -1.87 | Beccie, Equip, Griller, Skejs, VireZ       |
|            2 |     4857 | 2024-04-21 | Astralis Talent   | L   | 0.058      | -            | -                | -                | -         |    -0.99 | Beccie, Equip, Griller, Skejs, VireZ       |
|            1 |     4864 | 2024-04-20 | Sashi Academy     | W   | 0.055      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.055) |     0.26 | Beccie, Equip, Griller, Skejs, VireZ       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,243.18)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.661 | $1,250.00      | $825.73         |
| 2024-05-16 |      0.225 | $1,500.00      | $337.15         |
| 2024-04-27 |      0.101 | $795.00        | $80.30          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
