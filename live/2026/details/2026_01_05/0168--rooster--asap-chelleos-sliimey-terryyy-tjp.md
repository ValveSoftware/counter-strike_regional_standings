### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, sliimey, Terryyy, TjP<br />
Global Rank: [168](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [21]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  748.4<br />
<br />
Final Rank Value (748.4) = Starting Rank Value (707.2) + Head To Head Adjustments (41.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.2
- 400 + ( ( 0.155 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 707.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1844 | 2025-10-17 | SemperFi        | L   | 0.665      | -            | -                | -                | -         |    -7.22 | asap, chelleos, sliimey, Terryyy, TjP   |
|           28 |     1878 | 2025-10-16 | Mindfreak       | W   | 0.658      | 0.278        | 0.009 (0.002)    | 0.459 (0.084)    | 0 (0.000) |    14.13 | asap, chelleos, sliimey, Terryyy, TjP   |
|           27 |     1945 | 2025-10-14 | FURY            | W   | 0.645      | 0.278        | -                | 0.134 (0.024)    | 0 (0.000) |     4.60 | asap, chelleos, sliimey, Terryyy, TjP   |
|           26 |     2203 | 2025-10-07 | Ground Zero     | W   | 0.598      | 0.278        | 0.011 (0.002)    | 0.303 (0.050)    | 0 (0.000) |     9.84 | asap, chelleos, sliimey, Terryyy, TjP   |
|           25 |     2265 | 2025-10-06 | KZG             | W   | 0.592      | 0.278        | 0.000 (0.000)    | -                | 0 (0.000) |     6.31 | asap, chelleos, sliimey, Terryyy, TjP   |
|           24 |     2327 | 2025-10-05 | Animus Victoria | L   | 0.584      | -            | -                | -                | -         |   -14.12 | asap, chelleos, sliimey, Terryyy, TjP   |
|           23 |     2520 | 2025-09-30 | M80             | L   | 0.551      | -            | -                | -                | -         |    -0.30 | asap, chelleos, sliimey, Terryyy, TjP   |
|           22 |     2555 | 2025-09-29 | 3DMAX           | L   | 0.545      | -            | -                | -                | -         |    -0.09 | asap, chelleos, sliimey, Terryyy, TjP   |
|           21 |     2595 | 2025-09-28 | G2              | L   | 0.538      | -            | -                | -                | -         |    -0.10 | asap, chelleos, sliimey, Terryyy, TjP   |
|           20 |     2867 | 2025-09-20 | SemperFi        | L   | 0.485      | -            | -                | -                | -         |    -6.13 | asap, chelleos, sliimey, Terryyy, TjP   |
|           19 |     2970 | 2025-09-17 | SemperFi        | W   | 0.465      | 0.278        | 0.015 (0.002)    | 0.323 (0.042)    | 0 (0.000) |     8.86 | asap, chelleos, sliimey, Terryyy, TjP   |
|           18 |     3158 | 2025-09-12 | SemperFi        | L   | 0.432      | -            | -                | -                | -         |    -5.26 | asap, chelleos, sliimey, Terryyy, TjP   |
|           17 |     3210 | 2025-09-11 | Underground     | W   | 0.425      | 0.314        | 0.001 (0.000)    | -                | 0 (0.000) |     4.75 | asap, chelleos, sliimey, Terryyy, TjP   |
|           16 |     3214 | 2025-09-11 | Ground Zero     | W   | 0.424      | 0.314        | 0.011 (0.001)    | 0.303 (0.040)    | 0 (0.000) |     6.85 | asap, chelleos, sliimey, Terryyy, TjP   |
|           15 |     3265 | 2025-09-10 | KZG             | W   | 0.418      | 0.314        | 0.000 (0.000)    | -                | 0 (0.000) |     4.60 | asap, chelleos, sliimey, Terryyy, TjP   |
|           14 |     3314 | 2025-09-09 | FURY            | W   | 0.412      | 0.278        | -                | 0.134 (0.015)    | 0 (0.000) |     3.18 | asap, chelleos, sliimey, Terryyy, TjP   |
|           13 |     3317 | 2025-09-09 | Underground     | L   | 0.411      | -            | -                | -                | -         |    -8.24 | asap, chelleos, sliimey, Terryyy, TjP   |
|           12 |     3358 | 2025-09-08 | Mindfreak       | W   | 0.405      | 0.278        | 0.009 (0.001)    | 0.459 (0.052)    | 0 (0.000) |     9.91 | asap, chelleos, sliimey, Terryyy, TjP   |
|           11 |     3418 | 2025-09-06 | FURY            | W   | 0.391      | 0.314        | -                | 0.134 (0.016)    | -         |     3.13 | asap, BRACE, chelleos, sliimey, Terryyy |
|           10 |     3559 | 2025-08-29 | SemperFi        | L   | 0.339      | -            | -                | -                | -         |    -4.15 | asap, chelleos, sliimey, Terryyy, TjP   |
|            9 |     3599 | 2025-08-28 | ex-TALON        | W   | 0.331      | -            | -                | -                | -         |     2.44 | asap, chelleos, sliimey, Terryyy, TjP   |
|            8 |     3624 | 2025-08-27 | Mindfreak       | W   | 0.325      | 0.278        | 0.009 (0.001)    | 0.459 (0.041)    | -         |     8.32 | asap, chelleos, sliimey, Terryyy, TjP   |
|            7 |     4016 | 2025-08-13 | Ground Zero     | W   | 0.232      | 0.278        | 0.011 (0.001)    | 0.303 (0.019)    | -         |     3.92 | asap, chelleos, sliimey, Terryyy, TjP   |
|            6 |     4064 | 2025-08-12 | ex-TALON        | L   | 0.225      | -            | -                | -                | -         |    -5.40 | asap, chelleos, sliimey, Terryyy, TjP   |
|            5 |     4120 | 2025-08-11 | DOG             | W   | 0.218      | -            | -                | -                | -         |     1.04 | asap, chelleos, sliimey, Terryyy, TjP   |
|            4 |     4541 | 2025-07-18 | SemperFi        | L   | 0.058      | -            | -                | -                | -         |    -0.70 | asap, chelleos, sliimey, Terryyy, TjP   |
|            3 |     4563 | 2025-07-16 | KZG             | W   | 0.050      | -            | -                | -                | -         |     0.58 | asap, chelleos, sliimey, Terryyy, TjP   |
|            2 |     4613 | 2025-07-15 | ex-TALON        | W   | 0.038      | -            | -                | -                | -         |     0.28 | asap, chelleos, sliimey, Terryyy, TjP   |
|            1 |     4670 | 2025-07-12 | Animus Victoria | W   | 0.019      | -            | -                | -                | -         |     0.15 | asap, chelleos, sliimey, Terryyy, TjP   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,151.77)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-17 |      0.665 | $1,000.00      | $665.40         |
| 2025-10-02 |      0.568 | $3,000.00      | $1,702.60       |
| 2025-09-20 |      0.485 | $1,000.00      | $485.01         |
| 2025-09-12 |      0.432 | $1,960.00      | $846.25         |
| 2025-08-29 |      0.339 | $1,000.00      | $338.61         |
| 2025-07-18 |      0.058 | $1,966.00      | $113.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
