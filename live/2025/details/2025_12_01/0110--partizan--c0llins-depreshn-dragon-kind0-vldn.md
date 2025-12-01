### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, DEPRESHN, Dragon, Kind0, VLDN<br />
Global Rank: [110](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [75]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  893.1<br />
<br />
Final Rank Value (893.1) = Starting Rank Value (786.9) + Head To Head Adjustments (106.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.174[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 786.9
- 400 + ( ( 0.203 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 786.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |     2647 | 2025-09-11 | CPH Wolves       | W   | 0.659      | 0.435        | -                | 0.772 (0.221)    | 0 (0.000) |    10.00 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           43 |     2681 | 2025-09-10 | Betera           | L   | 0.654      | -            | -                | -                | -         |    -5.90 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           42 |     2728 | 2025-09-09 | Eternal Fire     | L   | 0.647      | -            | -                | -                | -         |   -10.69 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           41 |     2783 | 2025-09-08 | GUN5             | L   | 0.640      | -            | -                | -                | -         |    -4.39 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           40 |     2847 | 2025-09-06 | kONO             | L   | 0.627      | -            | -                | -                | -         |   -11.73 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           39 |     2989 | 2025-08-29 | Spirit Academy   | L   | 0.573      | -            | -                | -                | -         |    -9.28 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           38 |     3087 | 2025-08-26 | Betera           | W   | 0.552      | 0.435        | 0.033 (0.008)    | 0.925 (0.222)    | 0 (0.000) |    11.84 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           37 |     3123 | 2025-08-23 | ARCRED           | W   | 0.534      | 0.435        | -                | 0.742 (0.172)    | 0 (0.000) |     7.18 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           36 |     3139 | 2025-08-22 | Zero Tenacity    | L   | 0.527      | -            | -                | -                | -         |    -5.42 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           35 |     3191 | 2025-08-20 | Monte            | W   | 0.513      | 0.435        | 0.033 (0.007)    | 0.945 (0.211)    | 0 (0.000) |    14.39 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           34 |     3213 | 2025-08-19 | OG               | L   | 0.506      | -            | -                | -                | -         |    -1.07 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           33 |     3336 | 2025-08-15 | Sashi            | L   | 0.481      | -            | -                | -                | -         |    -1.16 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           32 |     3375 | 2025-08-14 | Zero Tenacity    | L   | 0.474      | -            | -                | -                | -         |    -5.13 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           31 |     3398 | 2025-08-14 | BC.Game          | W   | 0.472      | 0.486        | 0.041 (0.009)    | 0.565 (0.130)    | 0 (0.000) |    10.63 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           30 |     3438 | 2025-08-13 | ENCE             | L   | 0.467      | -            | -                | -                | -         |    -0.67 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           29 |     3490 | 2025-08-12 | ARCRED           | W   | 0.460      | 0.486        | -                | 0.742 (0.166)    | 0 (0.000) |     6.46 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           28 |     3531 | 2025-08-11 | JiJieHao         | W   | 0.454      | 0.384        | 0.016 (0.003)    | 0.773 (0.135)    | 0 (0.000) |     7.50 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           27 |     3543 | 2025-08-11 | Tricked          | W   | 0.453      | -            | -                | -                | 0 (0.000) |     3.17 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           26 |     3566 | 2025-08-10 | Nexus            | W   | 0.448      | 0.486        | -                | 0.840 (0.183)    | 0 (0.000) |    11.38 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           25 |     3599 | 2025-08-09 | PARIVISION       | L   | 0.440      | -            | -                | -                | -         |    -0.93 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           24 |     3621 | 2025-08-08 | BIG              | W   | 0.433      | -            | -                | -                | 0 (0.000) |     5.60 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           23 |     3648 | 2025-08-06 | Sangal           | W   | 0.421      | 0.435        | 0.026 (0.005)    | 0.925 (0.169)    | -         |    10.59 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           22 |     3652 | 2025-08-06 | ECLOT            | W   | 0.420      | 0.384        | 0.069 (0.011)    | -                | -         |    10.89 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           21 |     3657 | 2025-08-06 | m1x              | W   | 0.418      | -            | -                | -                | -         |     2.75 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           20 |     3665 | 2025-08-05 | SAW              | L   | 0.413      | -            | -                | -                | -         |    -0.16 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           19 |     3704 | 2025-08-02 | Passion UA       | W   | 0.393      | -            | -                | -                | -         |     5.62 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           18 |     3720 | 2025-08-01 | Betclic          | L   | 0.387      | -            | -                | -                | -         |    -3.71 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           17 |     3752 | 2025-07-30 | Nexus            | W   | 0.371      | 0.435        | -                | 0.840 (0.136)    | -         |     9.94 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           16 |     3895 | 2025-07-22 | Inner Circle     | W   | 0.320      | 0.371        | 0.080 (0.009)    | -                | -         |     9.83 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           15 |     3897 | 2025-07-21 | GUN5             | W   | 0.314      | 0.371        | 0.023 (0.003)    | -                | -         |     8.90 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           14 |     3926 | 2025-07-19 | HOTU             | W   | 0.301      | 0.371        | 0.049 (0.006)    | -                | -         |     8.98 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           13 |     3977 | 2025-07-18 | Metizport        | W   | 0.293      | -            | -                | -                | -         |     8.00 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           12 |     3992 | 2025-07-17 | NIP Impact       | W   | 0.287      | 0.371        | 0.046 (0.005)    | -                | -         |     5.61 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           11 |     4015 | 2025-07-16 | RUBY             | L   | 0.281      | -            | -                | -                | -         |    -2.08 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|           10 |     4195 | 2025-07-09 | Friendly Campers | L   | 0.233      | -            | -                | -                | -         |    -0.81 | andr1x, DEPRESHN, Dragon, emi, Kind0   |
|            9 |     4386 | 2025-06-18 | BC.Game          | L   | 0.094      | -            | -                | -                | -         |    -2.12 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            8 |     4390 | 2025-06-18 | Zero Tenacity    | L   | 0.092      | -            | -                | -                | -         |    -0.74 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            7 |     4401 | 2025-06-17 | HubaBuba         | L   | 0.087      | -            | -                | -                | -         |    -1.85 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            6 |     4443 | 2025-06-15 | FAVBET           | W   | 0.072      | -            | -                | -                | -         |     1.60 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            5 |     4538 | 2025-06-12 | ALGO             | W   | 0.054      | -            | -                | -                | -         |     0.36 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            4 |     4553 | 2025-06-12 | 9INE             | W   | 0.051      | -            | -                | -                | -         |     1.53 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            3 |     4563 | 2025-06-11 | Monte            | L   | 0.045      | -            | -                | -                | -         |    -0.07 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            2 |     4595 | 2025-06-09 | PARIVISION       | W   | 0.033      | -            | -                | -                | -         |     0.99 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |
|            1 |     4643 | 2025-06-06 | GUN5             | W   | 0.012      | -            | -                | -                | -         |     0.35 | c0llins, DEPRESHN, Dragon, Kind0, VLDN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,734.18)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-10 |      0.447 | $2,000.00      | $893.71         |
| 2025-07-22 |      0.320 | $12,000.00     | $3,840.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
