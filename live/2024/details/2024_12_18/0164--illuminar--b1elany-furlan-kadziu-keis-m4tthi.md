### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, keis, m4tthi<br />
Global Rank: [164](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [110]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  696.3<br />
<br />
Final Rank Value (696.3) = Starting Rank Value (691.0) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.0
- 400 + ( ( 0.152 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 691.0


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
|           27 |     1552 | 2024-10-05 | NAVI Junior       | L   | 0.705      | -            | -                | -                | -         |    -2.64 | b1elany, Furlan, kadziu, keis, m4tthi    |
|           26 |     2179 | 2024-09-18 | Passion UA        | L   | 0.591      | -            | -                | -                | -         |    -1.55 | b1elany, Furlan, kadziu, Melavi, phr     |
|           25 |     3020 | 2024-08-23 | Young Ninjas      | L   | 0.419      | -            | -                | -                | -         |    -5.45 | b1elany, Furlan, kadziu, Melavi, phr     |
|           24 |     3128 | 2024-08-21 | Anonymo           | L   | 0.405      | -            | -                | -                | -         |    -4.69 | b1elany, Furlan, kadziu, Markoś, phr     |
|           23 |     3153 | 2024-08-20 | GenOne            | W   | 0.399      | 0.143        | 0.014 (0.001)    | 0.450 (0.026)    | 0 (0.000) |     7.51 | b1elany, Furlan, kadziu, Markoś, phr     |
|           22 |     3155 | 2024-08-20 | ECLOT             | L   | 0.398      | -            | -                | -                | -         |    -0.36 | b1elany, Furlan, kadziu, Markoś, phr     |
|           21 |     3183 | 2024-08-19 | ECSTATIC          | L   | 0.393      | -            | -                | -                | -         |    -2.50 | b1elany, Furlan, kadziu, Markoś, phr     |
|           20 |     3190 | 2024-08-19 | ALTERNATE aTTaX   | W   | 0.392      | 0.371        | 0.071 (0.010)    | 0.786 (0.114)    | 0 (0.000) |    11.19 | b1elany, Furlan, kadziu, Markoś, phr     |
|           19 |     3271 | 2024-08-15 | Insilio           | L   | 0.367      | -            | -                | -                | -         |    -3.63 | b1elany, Furlan, kadziu, Markoś, phr     |
|           18 |     3289 | 2024-08-15 | GUN5              | L   | 0.365      | -            | -                | -                | -         |    -1.71 | b1elany, Furlan, kadziu, Markoś, phr     |
|           17 |     3326 | 2024-08-13 | los kogutos       | L   | 0.354      | -            | -                | -                | -         |    -0.76 | b1elany, Furlan, kadziu, Markoś, phr     |
|           16 |     3334 | 2024-08-13 | DMS               | L   | 0.353      | -            | -                | -                | -         |    -5.25 | b1elany, Furlan, kadziu, Markoś, phr     |
|           15 |     3347 | 2024-08-13 | SINNERS           | L   | 0.352      | -            | -                | -                | -         |    -0.97 | b1elany, Furlan, kadziu, Markoś, phr     |
|           14 |     3414 | 2024-08-11 | HAVU              | W   | 0.339      | 0.435        | 0.000 (0.000)    | 0.013 (0.002)    | 0 (0.000) |     2.68 | b1elany, Furlan, kadziu, Markoś, phr     |
|           13 |     3422 | 2024-08-11 | TSM               | L   | 0.338      | -            | -                | -                | -         |    -2.35 | b1elany, Furlan, kadziu, Markoś, phr     |
|           12 |     3477 | 2024-08-08 | Aurora Young Blud | L   | 0.321      | -            | -                | -                | -         |    -2.11 | b1elany, Furlan, kadziu, Markoś, phr     |
|           11 |     3494 | 2024-08-08 | NAVI Junior       | W   | 0.319      | 0.333        | 0.169 (0.018)    | 1.000 (0.106)    | 0 (0.000) |     8.71 | b1elany, Furlan, kadziu, Markoś, phr     |
|           10 |     3530 | 2024-08-07 | EYEBALLERS        | L   | 0.313      | -            | -                | -                | -         |    -3.96 | b1elany, Furlan, kadziu, Markoś, phr     |
|            9 |     3590 | 2024-08-06 | kONO              | L   | 0.305      | -            | -                | -                | -         |    -2.64 | b1elany, Furlan, kadziu, Markoś, phr     |
|            8 |     3715 | 2024-08-02 | 9 Pandas          | L   | 0.278      | -            | -                | -                | -         |    -0.79 | b1elany, Furlan, kadziu, Markoś, phr     |
|            7 |     3806 | 2024-07-31 | Sampi             | W   | 0.265      | 0.143        | 0.037 (0.001)    | 0.426 (0.016)    | 0 (0.000) |     7.12 | b1elany, Furlan, kadziu, Markoś, phr     |
|            6 |     4103 | 2024-07-22 | ex-Enterprise     | L   | 0.204      | -            | -                | -                | -         |    -1.66 | b1elany, Furlan, kadziu, Markoś, phr     |
|            5 |     4167 | 2024-07-20 | Johnny Speeds     | W   | 0.191      | 0.371        | 0.097 (0.007)    | 0.952 (0.067)    | 0 (0.000) |     5.39 | b1elany, Furlan, kadziu, Markoś, phr     |
|            4 |     4265 | 2024-07-18 | Rebels            | L   | 0.178      | -            | -                | -                | -         |    -1.62 | b1elany, Furlan, kadziu, Markoś, phr     |
|            3 |     4372 | 2024-07-16 | kONO              | W   | 0.165      | 0.371        | 0.013 (0.001)    | 0.386 (0.024)    | 0 (0.000) |     3.86 | b1elany, Furlan, kadziu, Markoś, phr     |
|            2 |     4423 | 2024-07-15 | ALTERNATE aTTaX   | W   | 0.158      | 0.371        | 0.071 (0.004)    | 0.786 (0.046)    | 0 (0.000) |     4.64 | b1elany, Furlan, kadziu, Markoś, phr     |
|            1 |     4480 | 2024-07-11 | kONO              | L   | 0.132      | -            | -                | -                | -         |    -1.06 | b1elany, Furlan, kadziu, Markoś, splawik |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($704.45)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
