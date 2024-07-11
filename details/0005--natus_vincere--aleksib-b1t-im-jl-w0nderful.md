### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1897.7<br />
<br />
Final Rank Value (1897.7) = Starting Rank Value (1905.2) + Head To Head Adjustments (-7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.709[<sup>2</sup>](#table1)
- Opponent Network: 0.292[<sup>2</sup>](#table1)
- LAN Wins: 0.854[<sup>2</sup>](#table1)

The average of these factors is 0.714<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1905.2
- 400 + ( ( 0.714 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1905.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      154 | 2024-06-16 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -10.02 | Aleksib, b1t, iM, jL, w0nderful |
|           32 |      178 | 2024-06-15 | Virtus.pro        | W   | 1.000      | 0.729        | 0.347 (0.253)    | 0.391 (0.285)    | 1 (1.000) |     9.00 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |      268 | 2024-06-13 | FaZe              | W   | 1.000      | 0.729        | 0.936 (0.682)    | 0.491 (0.358)    | 1 (1.000) |    16.30 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      297 | 2024-06-12 | Astralis          | W   | 1.000      | 0.729        | 0.546 (0.398)    | 0.461 (0.336)    | 1 (1.000) |    14.77 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |      839 | 2024-05-29 | HEROIC            | L   | 0.913      | -            | -                | -                | -         |   -20.29 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      860 | 2024-05-28 | Spirit            | L   | 0.907      | -            | -                | -                | -         |   -10.01 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |      878 | 2024-05-27 | BIG               | W   | 0.901      | 0.624        | -                | 0.405 (0.227)    | 1 (0.901) |     1.56 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1444 | 2024-05-08 | FaZe              | L   | 0.774      | -            | -                | -                | -         |   -11.15 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     1494 | 2024-05-05 | Complexity        | L   | 0.754      | -            | -                | -                | -         |   -15.52 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1566 | 2024-05-02 | BIG               | W   | 0.732      | 0.889        | -                | 0.405 (0.263)    | 1 (0.732) |     1.04 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1593 | 2024-05-01 | FlyQuest          | W   | 0.725      | 0.889        | -                | 0.417 (0.269)    | 1 (0.725) |     0.90 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     2421 | 2024-03-31 | FaZe              | W   | 0.521      | 1.000        | 0.936 (0.487)    | 0.491 (0.256)    | 1 (0.521) |     8.25 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     2426 | 2024-03-30 | G2                | W   | 0.515      | 1.000        | 0.745 (0.384)    | 0.481 (0.248)    | 1 (0.515) |     8.33 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     2436 | 2024-03-29 | Eternal Fire      | W   | 0.507      | 1.000        | 1.000 (0.507)    | -                | 1 (0.507) |     5.20 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2529 | 2024-03-24 | paiN              | W   | 0.474      | 1.000        | 0.478 (0.226)    | 0.768 (0.364)    | 1 (0.474) |     2.34 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2537 | 2024-03-23 | Cloud9            | L   | 0.468      | -            | -                | -                | -         |   -14.29 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2553 | 2024-03-22 | Spirit            | L   | 0.460      | -            | -                | -                | -         |    -5.40 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2571 | 2024-03-21 | G2                | W   | 0.454      | 1.000        | 0.745 (0.338)    | -                | -         |     7.43 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2588 | 2024-03-21 | The MongolZ       | W   | 0.452      | 1.000        | 1.000 (0.452)    | 0.692 (0.312)    | -         |     8.13 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     3360 | 2024-02-16 | BetBoom           | W   | 0.227      | -            | -                | -                | -         |     1.40 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     3395 | 2024-02-15 | Virtus.pro        | L   | 0.220      | -            | -                | -                | -         |    -4.86 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     3425 | 2024-02-14 | Enterprise        | W   | 0.214      | -            | -                | -                | -         |     0.04 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     3442 | 2024-02-14 | KOI               | W   | 0.212      | -            | -                | -                | -         |     0.12 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     3539 | 2024-02-06 | Falcons           | L   | 0.160      | -            | -                | -                | -         |    -4.30 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3547 | 2024-02-05 | Eternal Fire      | W   | 0.154      | 1.000        | 1.000 (0.154)    | -                | -         |     1.37 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3564 | 2024-02-04 | Apeks             | W   | 0.147      | -            | -                | -                | -         |     0.04 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3590 | 2024-02-03 | Spirit            | L   | 0.140      | -            | -                | -                | -         |    -1.67 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3733 | 2024-01-27 | G2                | W   | 0.093      | -            | -                | -                | -         |     1.53 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3810 | 2024-01-23 | G2                | W   | 0.066      | -            | -                | -                | -         |     1.09 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3836 | 2024-01-22 | Complexity        | W   | 0.059      | -            | -                | -                | -         |     0.70 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     3952 | 2024-01-19 | Virtus.pro        | W   | 0.040      | -            | -                | -                | -         |     0.38 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     4008 | 2024-01-18 | 9 Pandas          | W   | 0.034      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     4024 | 2024-01-18 | Gaimin Gladiators | W   | 0.033      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($375,723.10)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $85,000.00     | $85,000.00      |
| 2024-06-02 |      0.941 | $5,000.00      | $4,705.01       |
| 2024-05-12 |      0.800 | $23,500.00     | $18,796.60      |
| 2024-03-31 |      0.521 | $500,000.00    | $260,319.25     |
| 2024-02-11 |      0.194 | $24,000.00     | $4,645.10       |
| 2024-01-28 |      0.100 | $22,500.00     | $2,257.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
