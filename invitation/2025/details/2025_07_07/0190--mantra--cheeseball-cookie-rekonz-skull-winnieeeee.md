### Roster Details<br />
Team Name: MANTRA<br />
Roster: cheeseball, cookie, rekonz, SkulL, Winnieeeee<br />
Global Rank: [190](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [28]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  604.7<br />
<br />
Final Rank Value (604.7) = Starting Rank Value (623.4) + Head To Head Adjustments (-18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 623.4
- 400 + ( ( 0.120 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 623.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     1082 | 2025-05-01 | Only One Word        | L   | 0.752      | -            | -                | -                | -         |    -9.73 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           26 |     1315 | 2025-04-19 | Reverse Sweep        | L   | 0.671      | -            | -                | -                | -         |   -13.59 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           25 |     1374 | 2025-04-17 | Only One Word        | L   | 0.657      | -            | -                | -                | -         |    -9.33 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           24 |     1544 | 2025-04-09 | Housebets            | L   | 0.604      | -            | -                | -                | -         |    -7.33 | cheeseball, rahley, rekonz, SkulL, vanillaicey |
|           23 |     1550 | 2025-04-09 | Housebets            | W   | 0.604      | 0.333        | 0.006 (0.001)    | 0.178 (0.036)    | 0 (0.000) |    12.02 | cheeseball, rahley, rekonz, SkulL, vanillaicey |
|           22 |     1780 | 2025-04-02 | Justice For Tomorrow | W   | 0.558      | 0.333        | 0.000 (0.000)    | 0.032 (0.006)    | 0 (0.000) |     7.32 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           21 |     1784 | 2025-04-02 | Justice For Tomorrow | W   | 0.558      | 0.333        | 0.000 (0.000)    | 0.032 (0.006)    | 0 (0.000) |     7.68 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           20 |     1933 | 2025-03-29 | ex-TALON             | L   | 0.531      | -            | -                | -                | -         |    -5.05 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           19 |     1941 | 2025-03-28 | Vantage              | W   | 0.530      | 0.143        | 0.000 (0.000)    | 0.059 (0.004)    | 0 (0.000) |     5.84 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           18 |     2002 | 2025-03-28 | KZG                  | W   | 0.524      | 0.143        | 0.001 (0.000)    | 0.080 (0.006)    | 0 (0.000) |     7.59 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           17 |     2072 | 2025-03-27 | Mindfreak            | L   | 0.518      | -            | -                | -                | -         |    -6.83 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           16 |     2074 | 2025-03-27 | Mindfreak            | L   | 0.518      | -            | -                | -                | -         |    -7.14 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           15 |     2077 | 2025-03-27 | Housebets            | L   | 0.517      | -            | -                | -                | -         |    -5.86 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           14 |     2124 | 2025-03-26 | Underground          | W   | 0.512      | 0.333        | 0.001 (0.000)    | 0.041 (0.007)    | 0 (0.000) |     7.34 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           13 |     2128 | 2025-03-26 | Underground          | W   | 0.511      | 0.333        | 0.001 (0.000)    | 0.041 (0.007)    | 0 (0.000) |     7.67 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           12 |     3032 | 2025-02-25 | KZG                  | L   | 0.322      | -            | -                | -                | -         |    -5.27 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           11 |     3065 | 2025-02-24 | Rooster              | W   | 0.315      | 0.143        | 0.007 (0.000)    | 0.213 (0.010)    | 0 (0.000) |     6.58 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|           10 |     3089 | 2025-02-23 | ex-TALON             | L   | 0.310      | -            | -                | -                | -         |    -3.15 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            9 |     3295 | 2025-02-16 | Justice For Tomorrow | L   | 0.258      | -            | -                | -                | -         |    -4.31 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            8 |     3296 | 2025-02-15 | BBBMBCBS             | W   | 0.257      | -            | -                | -                | 0 (0.000) |     1.82 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            7 |     3335 | 2025-02-14 | Vantage              | L   | 0.249      | -            | -                | -                | -         |    -5.30 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            6 |     3764 | 2025-01-28 | Only One Word        | W   | 0.131      | 0.333        | 0.002 (0.000)    | 0.168 (0.007)    | 0 (0.000) |     2.66 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            5 |     3768 | 2025-01-28 | Only One Word        | W   | 0.131      | 0.333        | 0.002 (0.000)    | 0.168 (0.007)    | -         |     2.69 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            4 |     3884 | 2025-01-23 | Rooster              | L   | 0.098      | -            | -                | -                | -         |    -1.02 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            3 |     3885 | 2025-01-23 | Rooster              | L   | 0.098      | -            | -                | -                | -         |    -1.02 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            2 |     3916 | 2025-01-22 | KZG                  | L   | 0.092      | -            | -                | -                | -         |    -1.49 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            1 |     3919 | 2025-01-22 | KZG                  | L   | 0.091      | -            | -                | -                | -         |    -1.50 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($617.17)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      0.771 | $800.00        | $617.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
