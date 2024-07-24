### Roster Details<br />
Team Name: LAG<br />
Roster: Experative, nicx, Nyyx, ogwizard, Weeza<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [110](../standings_global.md)<br />
Regional Rank: [27]( ../standings_americas.md)<br />
Final Rank Value:  850.9<br />
<br />
Final Rank Value (850.9) = Starting Rank Value (889.3) + Head To Head Adjustments (-38.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.146[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 889.3
- 400 + ( ( 0.242 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 889.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      109 | 2024-07-20 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -9.47 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           48 |      243 | 2024-07-17 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -16.59 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           47 |      250 | 2024-07-17 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -18.11 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           46 |      311 | 2024-07-16 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |   -12.31 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           45 |      317 | 2024-07-16 | Wildcard         | W   | 1.000      | 0.477        | 0.069 (0.033)    | 0.557 (0.265)    | 0 (0.000) |    19.50 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           44 |      360 | 2024-07-15 | Elevate          | W   | 1.000      | 0.477        | 0.035 (0.017)    | 0.563 (0.269)    | 0 (0.000) |    20.01 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           43 |      365 | 2024-07-15 | Elevate          | W   | 1.000      | 0.477        | 0.035 (0.017)    | 0.563 (0.269)    | 0 (0.000) |    21.66 | Experative, nicx, Nyyx, ogwizard, Weeza |
|           42 |      700 | 2024-06-13 | Mythic           | L   | 0.929      | -            | -                | -                | -         |   -15.29 | based, Experative, nicx, Nyyx, ogwizard |
|           41 |      872 | 2024-06-08 | Strife           | W   | 0.895      | 0.371        | 0.010 (0.003)    | -                | 0 (0.000) |     8.53 | based, Experative, nicx, Nyyx, ogwizard |
|           40 |      928 | 2024-06-07 | Wildcard         | L   | 0.889      | -            | -                | -                | -         |    -8.89 | based, Experative, nicx, Nyyx, ogwizard |
|           39 |     1012 | 2024-06-06 | Vibe             | W   | 0.880      | -            | -                | -                | 0 (0.000) |     2.13 | based, Experative, nicx, Nyyx, ogwizard |
|           38 |     1053 | 2024-06-05 | NRG              | L   | 0.876      | -            | -                | -                | -         |   -11.54 | based, Experative, nicx, Nyyx, ogwizard |
|           37 |     1062 | 2024-06-05 | Limitless        | W   | 0.875      | -            | -                | -                | 0 (0.000) |    10.96 | based, Experative, nicx, Nyyx, ogwizard |
|           36 |     1105 | 2024-06-04 | Limitless        | W   | 0.869      | 0.477        | 0.007 (0.003)    | -                | 0 (0.000) |    11.74 | based, Experative, nicx, Nyyx, ogwizard |
|           35 |     1114 | 2024-06-04 | Retirement Home  | W   | 0.868      | -            | -                | -                | -         |     2.05 | based, Experative, nicx, Nyyx, ogwizard |
|           34 |     1419 | 2024-05-22 | Limitless        | W   | 0.782      | 0.477        | -                | 0.196 (0.073)    | -         |     5.52 | based, Experative, nicx, Nyyx, ogwizard |
|           33 |     1422 | 2024-05-22 | Limitless        | W   | 0.782      | 0.477        | -                | 0.196 (0.073)    | -         |     5.80 | based, Experative, nicx, Nyyx, ogwizard |
|           32 |     1425 | 2024-05-22 | Wildcard         | L   | 0.782      | -            | -                | -                | -         |    -7.74 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |     1669 | 2024-05-15 | NRG              | L   | 0.735      | -            | -                | -                | -         |    -8.53 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |     1677 | 2024-05-15 | NRG              | L   | 0.735      | -            | -                | -                | -         |    -9.07 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |     1723 | 2024-05-14 | Limitless        | W   | 0.729      | -            | -                | -                | -         |     8.94 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |     1730 | 2024-05-14 | Limitless        | L   | 0.729      | -            | -                | -                | -         |   -14.37 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |     1865 | 2024-05-09 | M80              | L   | 0.695      | -            | -                | -                | -         |    -1.74 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |     1870 | 2024-05-09 | M80              | L   | 0.695      | -            | -                | -                | -         |    -1.77 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |     1884 | 2024-05-08 | Party Astronauts | L   | 0.689      | -            | -                | -                | -         |    -7.97 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |     1889 | 2024-05-08 | Party Astronauts | L   | 0.689      | -            | -                | -                | -         |    -8.44 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |     2551 | 2024-04-10 | Mythic           | W   | 0.502      | 0.477        | 0.012 (0.003)    | 0.310 (0.074)    | -         |     6.10 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     2556 | 2024-04-10 | Mythic           | W   | 0.502      | 0.477        | 0.012 (0.003)    | 0.310 (0.074)    | -         |     6.37 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     2606 | 2024-04-09 | BOSS             | L   | 0.496      | -            | -                | -                | -         |    -8.73 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     2609 | 2024-04-09 | BOSS             | L   | 0.495      | -            | -                | -                | -         |    -9.11 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     2737 | 2024-04-04 | Nouns            | W   | 0.462      | 0.477        | 0.073 (0.016)    | 0.589 (0.130)    | -         |     8.43 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     2742 | 2024-04-04 | Nouns            | L   | 0.462      | -            | -                | -                | -         |    -6.24 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     2783 | 2024-04-03 | Elevate          | L   | 0.456      | -            | -                | -                | -         |    -4.57 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     2786 | 2024-04-03 | Elevate          | W   | 0.455      | 0.477        | 0.035 (0.008)    | 0.563 (0.122)    | -         |    10.00 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     2960 | 2024-03-26 | Wildcard         | L   | 0.402      | -            | -                | -                | -         |    -5.55 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     2964 | 2024-03-26 | Wildcard         | W   | 0.402      | 0.477        | 0.069 (0.013)    | 0.557 (0.107)    | -         |     7.28 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     3046 | 2024-03-20 | Perseverance     | L   | 0.362      | -            | -                | -                | -         |    -7.93 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     3048 | 2024-03-20 | Perseverance     | W   | 0.362      | -            | -                | -                | -         |     3.51 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     3089 | 2024-03-17 | OMiT             | W   | 0.343      | -            | -                | -                | 1 (0.343) |     3.81 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     3091 | 2024-03-17 | Akimbo           | W   | 0.342      | -            | -                | -                | 1 (0.342) |     2.65 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     3101 | 2024-03-17 | WICKED           | W   | 0.340      | -            | -                | -                | 1 (0.340) |     1.81 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     3338 | 2024-03-07 | FLUFFY AIMERS    | W   | 0.276      | -            | -                | -                | -         |     3.27 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     3339 | 2024-03-07 | FLUFFY AIMERS    | L   | 0.276      | -            | -                | -                | -         |    -5.52 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     3367 | 2024-03-06 | MIGHT            | W   | 0.269      | -            | -                | -                | -         |     1.21 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     3368 | 2024-03-06 | MIGHT            | L   | 0.269      | -            | -                | -                | -         |    -7.33 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     3404 | 2024-03-05 | Take Flyte       | W   | 0.263      | -            | -                | -                | -         |     2.35 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     3406 | 2024-03-05 | Take Flyte       | W   | 0.262      | -            | -                | -                | -         |     2.39 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     3618 | 2024-02-24 | Limitless        | L   | 0.195      | -            | -                | -                | -         |    -4.76 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     3807 | 2024-02-16 | FLUFFY AIMERS    | L   | 0.141      | -            | -                | -                | -         |    -2.89 | based, Experative, nicx, Nyyx, ogwizard |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,593.90)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.902 | $3,000.00      | $2,706.87       |
| 2024-03-17 |      0.343 | $5,500.00      | $1,887.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
