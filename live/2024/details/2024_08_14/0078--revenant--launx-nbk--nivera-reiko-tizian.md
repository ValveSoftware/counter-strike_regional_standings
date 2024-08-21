### Roster Details<br />
Team Name: Revenant<br />
Roster: lauNX, NBK-, Nivera, reiko, tiziaN<br />
Global Rank: [78](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_14.md)<br />
Regional Rank: [57]( ../../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  939.5<br />
<br />
Final Rank Value (939.5) = Starting Rank Value (865.0) + Head To Head Adjustments (74.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.169[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.0
- 400 + ( ( 0.236 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 865.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |        2 | 2024-08-14 | Aurora Young Blud | W   | 1.000      | 0.435        | 0.019 (0.008)    | 0.594 (0.258)    | 0 (0.000) |    19.01 | lauNX, NBK-, Nivera, reiko, tiziaN |
|           25 |       49 | 2024-08-13 | UNiTY             | W   | 1.000      | 0.333        | 0.032 (0.011)    | 0.350 (0.117)    | 0 (0.000) |    17.60 | lauNX, NBK-, Nivera, reiko, tiziaN |
|           24 |      100 | 2024-08-12 | kONO              | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.603 (0.201)    | 0 (0.000) |    15.37 | lauNX, NBK-, Nivera, reiko, tiziaN |
|           23 |      118 | 2024-08-11 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -13.04 | lauNX, NBK-, Nivera, reiko, tiziaN |
|           22 |      166 | 2024-08-09 | TSM               | W   | 1.000      | 0.333        | 0.055 (0.018)    | 0.729 (0.243)    | 0 (0.000) |    20.72 | lauNX, NBK-, Nivera, reiko, tiziaN |
|           21 |      227 | 2024-08-07 | ECLOT             | W   | 1.000      | 0.333        | 0.078 (0.026)    | 0.501 (0.167)    | 0 (0.000) |    23.62 | lauNX, NBK-, Nivera, reiko, tiziaN |
|           20 |      331 | 2024-08-04 | Monte Gen         | L   | 1.000      | -            | -                | -                | -         |   -26.83 | HS, lauNX, NBK-, Nivera, reiko     |
|           19 |      669 | 2024-07-26 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -15.68 | adeX, Jeebs, NBK-, Nivera, reiko   |
|           18 |      698 | 2024-07-25 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -2.32 | adeX, Jeebs, NBK-, Nivera, reiko   |
|           17 |      729 | 2024-07-24 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |    -5.64 | adeX, lauNX, NBK-, Nivera, reiko   |
|           16 |      740 | 2024-07-24 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -0.68 | adeX, lauNX, NBK-, Nivera, reiko   |
|           15 |     1167 | 2024-07-12 | Verdant           | W   | 0.977      | 0.371        | 0.014 (0.005)    | 0.307 (0.111)    | 0 (0.000) |    12.60 | adeX, lauNX, NBK-, Nivera, reiko   |
|           14 |     1227 | 2024-07-09 | Johnny Speeds     | W   | 0.957      | 0.333        | 0.122 (0.039)    | 1.000 (0.319)    | 0 (0.000) |    26.07 | adeX, lauNX, NBK-, Nivera, reiko   |
|           13 |     1244 | 2024-07-08 | Enterprise        | L   | 0.951      | -            | -                | -                | -         |   -12.68 | adeX, lauNX, NBK-, Nivera, reiko   |
|           12 |     1246 | 2024-07-08 | lajtbitexe        | W   | 0.951      | 0.333        | 0.007 (0.002)    | -                | 0 (0.000) |     8.78 | adeX, lauNX, NBK-, Nivera, reiko   |
|           11 |     1251 | 2024-07-07 | kONO              | W   | 0.944      | 0.333        | 0.029 (0.009)    | 0.603 (0.190)    | 0 (0.000) |    15.44 | adeX, lauNX, NBK-, Nivera, reiko   |
|           10 |     1254 | 2024-07-06 | 777               | W   | 0.939      | 0.333        | 0.014 (0.004)    | 0.158 (0.050)    | 0 (0.000) |     8.66 | adeX, lauNX, NBK-, Nivera, reiko   |
|            9 |     1259 | 2024-07-05 | lajtbitexe        | L   | 0.931      | -            | -                | -                | -         |   -20.30 | adeX, lauNX, NBK-, Nivera, reiko   |
|            8 |     1290 | 2024-06-27 | Johnny Speeds     | L   | 0.877      | -            | -                | -                | -         |    -3.52 | adeX, lauNX, NBK-, Nivera, reiko   |
|            7 |     1293 | 2024-06-26 | lajtbitexe        | W   | 0.870      | -            | -                | -                | -         |     8.01 | adeX, lauNX, NBK-, Nivera, reiko   |
|            6 |     1294 | 2024-06-25 | Johnny Speeds     | L   | 0.865      | -            | -                | -                | -         |    -3.45 | adeX, lauNX, NBK-, Nivera, reiko   |
|            5 |     1302 | 2024-06-23 | Heimo             | W   | 0.850      | -            | -                | -                | -         |     6.32 | adeX, lauNX, NBK-, Nivera, reiko   |
|            4 |     1325 | 2024-06-16 | CYBERSHOKE        | L   | 0.806      | -            | -                | -                | -         |   -12.01 | adeX, lauNX, NBK-, Nivera, reiko   |
|            3 |     1354 | 2024-06-15 | Verdant           | W   | 0.800      | 0.143        | -                | 0.307 (0.035)    | -         |    12.72 | adeX, lauNX, NBK-, Nivera, reiko   |
|            2 |     1411 | 2024-06-14 | Astralis Talent   | W   | 0.792      | -            | -                | -                | -         |     7.40 | adeX, lauNX, NBK-, Nivera, reiko   |
|            1 |     1439 | 2024-06-13 | Verdant           | L   | 0.786      | -            | -                | -                | -         |   -11.59 | adeX, lauNX, NBK-, Nivera, reiko   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,376.11)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-07-09 |      0.957 | $6,000.00      | $5,743.97       |
| 2024-06-27 |      0.877 | $3,000.00      | $2,632.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
