### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, keis, m4tthi<br />
Global Rank: [172](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [114]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  666.5<br />
<br />
Final Rank Value (666.5) = Starting Rank Value (668.1) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 668.1
- 400 + ( ( 0.135 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 668.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     1704 | 2024-10-05 | NAVI Junior       | L   | 0.490      | -            | -                | -                | -         |    -1.58 | b1elany, Furlan, kadziu, keis, m4tthi |
|           20 |     2331 | 2024-09-18 | Passion UA        | L   | 0.376      | -            | -                | -                | -         |    -0.81 | b1elany, Furlan, kadziu, Melavi, phr  |
|           19 |     3172 | 2024-08-23 | Young Ninjas      | L   | 0.204      | -            | -                | -                | -         |    -2.81 | b1elany, Furlan, kadziu, Melavi, phr  |
|           18 |     3280 | 2024-08-21 | Anonymo           | L   | 0.190      | -            | -                | -                | -         |    -1.68 | b1elany, Furlan, kadziu, Markoś, phr  |
|           17 |     3305 | 2024-08-20 | GenOne            | W   | 0.184      | 0.143        | 0.019 (0.000)    | 0.580 (0.015)    | 0 (0.000) |     4.08 | b1elany, Furlan, kadziu, Markoś, phr  |
|           16 |     3307 | 2024-08-20 | ECLOT             | L   | 0.184      | -            | -                | -                | -         |    -0.14 | b1elany, Furlan, kadziu, Markoś, phr  |
|           15 |     3335 | 2024-08-19 | ECSTATIC          | L   | 0.178      | -            | -                | -                | -         |    -0.90 | b1elany, Furlan, kadziu, Markoś, phr  |
|           14 |     3342 | 2024-08-19 | ALTERNATE aTTaX   | W   | 0.177      | 0.371        | 0.074 (0.005)    | 0.680 (0.045)    | 0 (0.000) |     5.15 | b1elany, Furlan, kadziu, Markoś, phr  |
|           13 |     3423 | 2024-08-15 | Insilio           | L   | 0.152      | -            | -                | -                | -         |    -1.62 | b1elany, Furlan, kadziu, Markoś, phr  |
|           12 |     3441 | 2024-08-15 | GUN5              | L   | 0.151      | -            | -                | -                | -         |    -0.43 | b1elany, Furlan, kadziu, Markoś, phr  |
|           11 |     3478 | 2024-08-13 | los kogutos       | L   | 0.140      | -            | -                | -                | -         |    -0.22 | b1elany, Furlan, kadziu, Markoś, phr  |
|           10 |     3486 | 2024-08-13 | DMS               | L   | 0.139      | -            | -                | -                | -         |    -2.07 | b1elany, Furlan, kadziu, Markoś, phr  |
|            9 |     3499 | 2024-08-13 | SINNERS           | L   | 0.137      | -            | -                | -                | -         |    -0.36 | b1elany, Furlan, kadziu, Markoś, phr  |
|            8 |     3566 | 2024-08-11 | HAVU              | W   | 0.125      | 0.435        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.13 | b1elany, Furlan, kadziu, Markoś, phr  |
|            7 |     3574 | 2024-08-11 | TSM               | L   | 0.123      | -            | -                | -                | -         |    -0.94 | b1elany, Furlan, kadziu, Markoś, phr  |
|            6 |     3629 | 2024-08-08 | Aurora Young Blud | L   | 0.106      | -            | -                | -                | -         |    -0.58 | b1elany, Furlan, kadziu, Markoś, phr  |
|            5 |     3646 | 2024-08-08 | NAVI Junior       | W   | 0.104      | 0.333        | 0.204 (0.007)    | 1.000 (0.035)    | 0 (0.000) |     2.93 | b1elany, Furlan, kadziu, Markoś, phr  |
|            4 |     3682 | 2024-08-07 | EYEBALLERS        | L   | 0.098      | -            | -                | -                | -         |    -0.79 | b1elany, Furlan, kadziu, Markoś, phr  |
|            3 |     3742 | 2024-08-06 | kONO              | L   | 0.090      | -            | -                | -                | -         |    -0.53 | b1elany, Furlan, kadziu, Markoś, phr  |
|            2 |     3867 | 2024-08-02 | 9 Pandas          | L   | 0.064      | -            | -                | -                | -         |    -0.84 | b1elany, Furlan, kadziu, Markoś, phr  |
|            1 |     3958 | 2024-07-31 | Sampi             | W   | 0.050      | 0.143        | 0.041 (0.000)    | 0.274 (0.002)    | 0 (0.000) |     1.36 | b1elany, Furlan, kadziu, Markoś, phr  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($489.96)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
