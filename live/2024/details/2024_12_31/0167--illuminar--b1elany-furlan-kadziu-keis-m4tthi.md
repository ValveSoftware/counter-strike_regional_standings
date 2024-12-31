### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, keis, m4tthi<br />
Global Rank: [167](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [110]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  690.1<br />
<br />
Final Rank Value (690.1) = Starting Rank Value (686.5) + Head To Head Adjustments (3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.5
- 400 + ( ( 0.147 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 686.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     1635 | 2024-10-05 | NAVI Junior       | L   | 0.631      | -            | -                | -                | -         |    -2.25 | b1elany, Furlan, kadziu, keis, m4tthi    |
|           26 |     2262 | 2024-09-18 | Passion UA        | L   | 0.517      | -            | -                | -                | -         |    -1.23 | b1elany, Furlan, kadziu, Melavi, phr     |
|           25 |     3103 | 2024-08-23 | Young Ninjas      | L   | 0.345      | -            | -                | -                | -         |    -4.55 | b1elany, Furlan, kadziu, Melavi, phr     |
|           24 |     3211 | 2024-08-21 | Anonymo           | L   | 0.331      | -            | -                | -                | -         |    -3.35 | b1elany, Furlan, kadziu, Markoś, phr     |
|           23 |     3236 | 2024-08-20 | GenOne            | W   | 0.325      | 0.143        | 0.016 (0.001)    | 0.485 (0.023)    | 0 (0.000) |     6.40 | b1elany, Furlan, kadziu, Markoś, phr     |
|           22 |     3238 | 2024-08-20 | ECLOT             | L   | 0.324      | -            | -                | -                | -         |    -0.28 | b1elany, Furlan, kadziu, Markoś, phr     |
|           21 |     3266 | 2024-08-19 | ECSTATIC          | L   | 0.319      | -            | -                | -                | -         |    -1.86 | b1elany, Furlan, kadziu, Markoś, phr     |
|           20 |     3273 | 2024-08-19 | ALTERNATE aTTaX   | W   | 0.318      | 0.371        | 0.073 (0.009)    | 0.760 (0.090)    | 0 (0.000) |     9.11 | b1elany, Furlan, kadziu, Markoś, phr     |
|           19 |     3354 | 2024-08-15 | Insilio           | L   | 0.293      | -            | -                | -                | -         |    -3.00 | b1elany, Furlan, kadziu, Markoś, phr     |
|           18 |     3372 | 2024-08-15 | GUN5              | L   | 0.292      | -            | -                | -                | -         |    -1.14 | b1elany, Furlan, kadziu, Markoś, phr     |
|           17 |     3409 | 2024-08-13 | los kogutos       | L   | 0.280      | -            | -                | -                | -         |    -0.56 | b1elany, Furlan, kadziu, Markoś, phr     |
|           16 |     3417 | 2024-08-13 | DMS               | L   | 0.280      | -            | -                | -                | -         |    -4.15 | b1elany, Furlan, kadziu, Markoś, phr     |
|           15 |     3430 | 2024-08-13 | SINNERS           | L   | 0.278      | -            | -                | -                | -         |    -0.77 | b1elany, Furlan, kadziu, Markoś, phr     |
|           14 |     3497 | 2024-08-11 | HAVU              | W   | 0.266      | 0.435        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     2.21 | b1elany, Furlan, kadziu, Markoś, phr     |
|           13 |     3505 | 2024-08-11 | TSM               | L   | 0.264      | -            | -                | -                | -         |    -1.91 | b1elany, Furlan, kadziu, Markoś, phr     |
|           12 |     3560 | 2024-08-08 | Aurora Young Blud | L   | 0.247      | -            | -                | -                | -         |    -1.52 | b1elany, Furlan, kadziu, Markoś, phr     |
|           11 |     3577 | 2024-08-08 | NAVI Junior       | W   | 0.245      | 0.333        | 0.180 (0.015)    | 1.000 (0.082)    | 0 (0.000) |     6.77 | b1elany, Furlan, kadziu, Markoś, phr     |
|           10 |     3613 | 2024-08-07 | EYEBALLERS        | L   | 0.239      | -            | -                | -                | -         |    -2.92 | b1elany, Furlan, kadziu, Markoś, phr     |
|            9 |     3673 | 2024-08-06 | kONO              | L   | 0.231      | -            | -                | -                | -         |    -1.61 | b1elany, Furlan, kadziu, Markoś, phr     |
|            8 |     3798 | 2024-08-02 | 9 Pandas          | L   | 0.205      | -            | -                | -                | -         |    -0.55 | b1elany, Furlan, kadziu, Markoś, phr     |
|            7 |     3889 | 2024-07-31 | Sampi             | W   | 0.191      | 0.143        | 0.039 (0.001)    | 0.369 (0.010)    | 0 (0.000) |     5.16 | b1elany, Furlan, kadziu, Markoś, phr     |
|            6 |     4186 | 2024-07-22 | ex-Enterprise     | L   | 0.131      | -            | -                | -                | -         |    -1.04 | b1elany, Furlan, kadziu, Markoś, phr     |
|            5 |     4250 | 2024-07-20 | Johnny Speeds     | W   | 0.118      | 0.371        | 0.102 (0.004)    | 0.869 (0.038)    | 0 (0.000) |     3.33 | b1elany, Furlan, kadziu, Markoś, phr     |
|            4 |     4348 | 2024-07-18 | Rebels            | L   | 0.104      | -            | -                | -                | -         |    -0.98 | b1elany, Furlan, kadziu, Markoś, phr     |
|            3 |     4455 | 2024-07-16 | kONO              | W   | 0.092      | 0.371        | 0.037 (0.001)    | 0.597 (0.020)    | 0 (0.000) |     2.28 | b1elany, Furlan, kadziu, Markoś, phr     |
|            2 |     4506 | 2024-07-15 | ALTERNATE aTTaX   | W   | 0.085      | 0.371        | 0.073 (0.002)    | 0.760 (0.024)    | 0 (0.000) |     2.47 | b1elany, Furlan, kadziu, Markoś, phr     |
|            1 |     4563 | 2024-07-11 | kONO              | L   | 0.058      | -            | -                | -                | -         |    -0.38 | b1elany, Furlan, kadziu, Markoś, splawik |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($630.83)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
