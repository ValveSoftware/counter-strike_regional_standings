### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [131](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  722.8<br />
<br />
Final Rank Value (722.8) = Starting Rank Value (722.7) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.7
- 400 + ( ( 0.167 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 722.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      956 | 2024-12-12 | 9INE              | L   | 0.659      | -            | -                | -                | -         |    -6.03 | acoR, niko, sirah, valde, Zyphon  |
|           29 |      982 | 2024-12-10 | Iberian Soul      | L   | 0.646      | -            | -                | -                | -         |    -7.00 | acoR, niko, sirah, valde, Zyphon  |
|           28 |     1011 | 2024-12-08 | Illuminar         | W   | 0.632      | 0.371        | 0.007 (0.002)    | 0.311 (0.073)    | 0 (0.000) |    10.76 | acoR, niko, sirah, valde, Zyphon  |
|           27 |     1065 | 2024-12-06 | NAVI Junior       | L   | 0.619      | -            | -                | -                | -         |    -4.13 | acoR, niko, sirah, valde, Zyphon  |
|           26 |     1160 | 2024-12-02 | Endpoint          | W   | 0.592      | 0.371        | 0.009 (0.002)    | 0.259 (0.057)    | 0 (0.000) |     9.86 | acoR, niko, sirah, valde, Zyphon  |
|           25 |     1341 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.531      | -            | -                | -                | -         |    -5.30 | acoR, niko, sirah, valde, Zyphon  |
|           24 |     1369 | 2024-11-22 | PARIVISION        | W   | 0.524      | 0.143        | 0.006 (0.000)    | -                | 1 (0.524) |     8.27 | acoR, niko, sirah, valde, Zyphon  |
|           23 |     1383 | 2024-11-21 | Virtus.pro        | L   | 0.519      | -            | -                | -                | -         |    -0.14 | acoR, niko, sirah, valde, Zyphon  |
|           22 |     1393 | 2024-11-21 | 3DMAX             | L   | 0.518      | -            | -                | -                | -         |    -0.20 | acoR, niko, sirah, valde, Zyphon  |
|           21 |     1970 | 2024-10-26 | Chimera           | L   | 0.346      | -            | -                | -                | -         |    -3.86 | acoR, niko, sirah, valde, Zyphon  |
|           20 |     2140 | 2024-10-17 | HOTU              | L   | 0.285      | -            | -                | -                | -         |    -5.28 | acoR, niko, sirah, valde, Zyphon  |
|           19 |     2159 | 2024-10-16 | 9 Pandas          | L   | 0.281      | -            | -                | -                | -         |    -1.91 | acoR, niko, sirah, valde, Zyphon  |
|           18 |     2187 | 2024-10-15 | 3DMAX             | L   | 0.274      | -            | -                | -                | -         |    -0.10 | acoR, niko, sirah, valde, Zyphon  |
|           17 |     2254 | 2024-10-10 | SovvyKiNG         | L   | 0.239      | -            | -                | -                | -         |    -5.85 | acoR, niko, sirah, valde, Zyphon  |
|           16 |     2338 | 2024-10-08 | FAVBET            | L   | 0.227      | -            | -                | -                | -         |    -3.04 | acoR, niko, sirah, valde, Zyphon  |
|           15 |     2388 | 2024-10-06 | G2 Ares           | W   | 0.213      | 0.435        | -                | 0.096 (0.009)    | 0 (0.000) |     1.68 | acoR, niko, sirah, valde, Zyphon  |
|           14 |     2438 | 2024-10-05 | Passion UA        | L   | 0.205      | -            | -                | -                | -         |    -1.27 | acoR, niko, sirah, valde, Zyphon  |
|           13 |     2464 | 2024-10-04 | ECSTATIC          | L   | 0.200      | -            | -                | -                | -         |    -2.09 | acoR, niko, sirah, valde, Zyphon  |
|           12 |     2476 | 2024-10-04 | Apogee            | W   | 0.198      | 0.371        | -                | 0.103 (0.008)    | 0 (0.000) |     2.74 | acoR, niko, sirah, valde, Zyphon  |
|           11 |     2499 | 2024-10-03 | ALTERNATE aTTaX   | L   | 0.194      | -            | -                | -                | -         |    -2.03 | acoR, niko, sirah, valde, Zyphon  |
|           10 |     2516 | 2024-10-03 | Illuminar         | W   | 0.191      | 0.371        | 0.007 (0.000)    | 0.311 (0.022)    | 0 (0.000) |     3.49 | acoR, niko, sirah, valde, Zyphon  |
|            9 |     2603 | 2024-10-01 | Tricked           | W   | 0.179      | 0.371        | 0.033 (0.002)    | 0.768 (0.051)    | 0 (0.000) |     3.43 | acoR, niko, sirah, valde, Zyphon  |
|            8 |     2609 | 2024-10-01 | Apogee            | L   | 0.178      | -            | -                | -                | -         |    -3.19 | acoR, niko, sirah, valde, Zyphon  |
|            7 |     2630 | 2024-09-30 | Adventurers       | W   | 0.172      | 0.435        | 0.003 (0.000)    | 0.105 (0.008)    | 0 (0.000) |     2.54 | acoR, niko, sirah, valde, Zyphon  |
|            6 |     2655 | 2024-09-29 | Illuminar         | W   | 0.166      | 0.371        | 0.007 (0.000)    | 0.311 (0.019)    | 0 (0.000) |     3.02 | acoR, niko, sirah, valde, Zyphon  |
|            5 |     2840 | 2024-09-25 | Tricked           | W   | 0.139      | 0.371        | 0.033 (0.002)    | 0.768 (0.040)    | 0 (0.000) |     2.71 | acoR, niko, sirah, valde, Zyphon  |
|            4 |     2988 | 2024-09-21 | Permitta          | W   | 0.111      | 0.371        | 0.027 (0.001)    | 0.364 (0.015)    | -         |     2.63 | acoR, niko, sirah, valde, Zyphon  |
|            3 |     3259 | 2024-09-12 | Sashi             | L   | 0.053      | -            | -                | -                | -         |    -0.39 | acoR, Altekz, niko, sirah, Zyphon |
|            2 |     3322 | 2024-09-10 | ALTERNATE aTTaX   | W   | 0.040      | 0.384        | 0.020 (0.000)    | -                | -         |     0.88 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     3328 | 2024-09-10 | SAW               | L   | 0.039      | -            | -                | -                | -         |    -0.04 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,929.62)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.306 | $6,000.00      | $1,838.72       |
| 2024-10-05 |      0.205 | $5,000.00      | $1,023.67       |
| 2024-09-14 |      0.067 | $1,000.00      | $67.23          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
