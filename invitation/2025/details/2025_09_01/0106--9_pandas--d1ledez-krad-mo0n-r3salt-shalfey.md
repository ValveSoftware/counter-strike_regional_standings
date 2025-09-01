### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, Krad, mo0N, r3salt, shalfey<br />
Global Rank: [106](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [69]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  800.5<br />
<br />
Final Rank Value (800.5) = Starting Rank Value (767.7) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.336[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 767.7
- 400 + ( ( 0.192 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 767.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |     1017 | 2025-07-14 | ESC                | L   | 0.872      | -            | -                | -                | -         |   -10.57 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           32 |     2527 | 2025-04-19 | ENCE               | L   | 0.300      | -            | -                | -                | -         |    -0.53 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           31 |     2537 | 2025-04-18 | Nemiga             | L   | 0.294      | -            | -                | -                | -         |    -1.25 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           30 |     2542 | 2025-04-18 | GUN5               | W   | 0.293      | 0.657        | 0.041 (0.008)    | 0.658 (0.127)    | 0 (0.000) |     6.26 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           29 |     2553 | 2025-04-18 | ECLOT              | W   | 0.292      | 0.657        | 0.058 (0.011)    | 0.528 (0.101)    | 0 (0.000) |     5.72 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           28 |     2572 | 2025-04-17 | Partizan           | W   | 0.287      | 0.657        | 0.063 (0.012)    | 1.000 (0.188)    | 0 (0.000) |     6.65 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           27 |     2585 | 2025-04-17 | FUT                | L   | 0.285      | -            | -                | -                | -         |    -2.18 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           26 |     2604 | 2025-04-16 | B8                 | L   | 0.280      | -            | -                | -                | -         |    -0.54 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           25 |     2608 | 2025-04-16 | BetBoom            | L   | 0.279      | -            | -                | -                | -         |    -0.26 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           24 |     2631 | 2025-04-15 | SAW                | W   | 0.273      | 0.525        | 0.253 (0.036)    | 0.482 (0.069)    | 0 (0.000) |     8.23 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           23 |     2646 | 2025-04-14 | OG                 | L   | 0.267      | -            | -                | -                | -         |    -1.07 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           22 |     2659 | 2025-04-14 | BIG                | W   | 0.265      | 0.525        | 0.136 (0.019)    | 0.414 (0.058)    | 0 (0.000) |     7.31 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           21 |     2913 | 2025-04-03 | Metizport          | W   | 0.194      | 0.607        | 0.017 (0.002)    | 0.489 (0.058)    | 0 (0.000) |     4.21 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           20 |     2928 | 2025-04-03 | Passion UA         | L   | 0.192      | -            | -                | -                | -         |    -0.44 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           19 |     2930 | 2025-04-03 | Nemiga             | L   | 0.192      | -            | -                | -                | -         |    -0.71 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           18 |     2977 | 2025-04-02 | Passion UA         | W   | 0.186      | 0.607        | 0.074 (0.008)    | 0.949 (0.107)    | 0 (0.000) |     5.25 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           17 |     2993 | 2025-04-02 | Imperial Valkyries | W   | 0.185      | 0.607        | 0.034 (0.004)    | 0.107 (0.012)    | 0 (0.000) |     3.08 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           16 |     3138 | 2025-03-29 | BetBoom            | L   | 0.160      | -            | -                | -                | -         |    -0.12 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           15 |     3186 | 2025-03-28 | Metizport          | L   | 0.155      | -            | -                | -                | -         |    -1.61 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           14 |     3262 | 2025-03-27 | Leo                | W   | 0.147      | 0.769        | -                | 0.254 (0.029)    | 0 (0.000) |     1.18 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           13 |     3642 | 2025-03-15 | ENCE               | L   | 0.066      | -            | -                | -                | -         |    -0.08 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           12 |     3673 | 2025-03-13 | Nexus              | W   | 0.054      | 0.435        | -                | 0.778 (0.018)    | 0 (0.000) |     1.29 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           11 |     3708 | 2025-03-11 | Monte              | W   | 0.041      | -            | -                | -                | -         |     0.48 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           10 |     3753 | 2025-03-10 | 9INE               | L   | 0.033      | -            | -                | -                | -         |    -0.05 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            9 |     3759 | 2025-03-10 | fnatic             | L   | 0.032      | -            | -                | -                | -         |    -0.03 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            8 |     3790 | 2025-03-09 | HEROIC             | L   | 0.027      | -            | -                | -                | -         |    -0.01 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            7 |     3810 | 2025-03-09 | Gentle Mates       | W   | 0.026      | 0.435        | 0.158 (0.002)    | -                | -         |     0.80 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            6 |     3863 | 2025-03-08 | BetBoom            | W   | 0.021      | 0.435        | 0.429 (0.004)    | -                | -         |     0.64 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            5 |     3886 | 2025-03-08 | ECLOT              | W   | 0.020      | -            | -                | -                | -         |     0.41 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            4 |     3945 | 2025-03-07 | 9INE               | W   | 0.013      | -            | -                | -                | -         |     0.40 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            3 |     3950 | 2025-03-07 | GUN5               | W   | 0.013      | -            | -                | -                | -         |     0.29 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            2 |     4007 | 2025-03-06 | PARIVISION         | W   | 0.006      | -            | -                | -                | -         |     0.14 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            1 |     4029 | 2025-03-05 | PARIVISION         | L   | 0.001      | -            | -                | -                | -         |    -0.01 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,304.46)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-20 |      0.308 | $15,000.00     | $4,617.12       |
| 2025-04-03 |      0.194 | $7,500.00      | $1,456.99       |
| 2025-03-16 |      0.074 | $2,000.00      | $148.32         |
| 2025-03-11 |      0.041 | $2,000.00      | $82.03          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
