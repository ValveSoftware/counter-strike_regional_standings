### Roster Details<br />
Team Name: KZG<br />
Roster: dearlucid, dpr, Drox, Mingovi, vinhy<br />
Global Rank: [220](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [30]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  597.2<br />
<br />
Final Rank Value (597.2) = Starting Rank Value (619.1) + Head To Head Adjustments (-21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.1
- 400 + ( ( 0.115 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 619.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1705 | 2025-10-06 | Rooster         | L   | 0.825      | -            | -                | -                | -         |    -8.47 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|           16 |     1766 | 2025-10-05 | Mindfreak       | L   | 0.818      | -            | -                | -                | -         |    -6.66 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|           15 |     2375 | 2025-09-18 | Ground Zero     | L   | 0.704      | -            | -                | -                | -         |    -8.54 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           14 |     2702 | 2025-09-10 | FURY            | W   | 0.652      | 0.278        | 0.000 (0.000)    | 0.148 (0.027)    | 0 (0.000) |     7.23 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           13 |     2705 | 2025-09-10 | Rooster         | L   | 0.651      | -            | -                | -                | -         |    -7.02 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           12 |     2756 | 2025-09-09 | DanCompany      | W   | 0.645      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.33 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           11 |     2799 | 2025-09-08 | Ground Zero     | L   | 0.638      | -            | -                | -                | -         |    -7.92 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           10 |     2803 | 2025-09-08 | Animus Victoria | W   | 0.637      | 0.314        | 0.000 (0.000)    | 0.160 (0.032)    | 0 (0.000) |     8.28 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            9 |     2853 | 2025-09-06 | Ground Zero     | L   | 0.625      | -            | -                | -                | -         |    -7.97 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            8 |     2878 | 2025-09-05 | Mindfreak       | W   | 0.618      | 0.314        | 0.005 (0.001)    | 0.471 (0.091)    | 0 (0.000) |    15.60 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            7 |     2902 | 2025-09-03 | Animus Victoria | L   | 0.605      | -            | -                | -                | -         |   -11.15 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            6 |     2918 | 2025-09-01 | Exsto           | W   | 0.592      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.25 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            5 |     4000 | 2025-07-17 | SemperFi        | L   | 0.285      | -            | -                | -                | -         |    -2.90 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            4 |     4003 | 2025-07-16 | Rooster         | L   | 0.283      | -            | -                | -                | -         |    -3.29 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            3 |     4051 | 2025-07-15 | Ground Zero     | W   | 0.272      | 0.314        | 0.009 (0.001)    | 0.324 (0.028)    | 0 (0.000) |     5.41 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            2 |     4170 | 2025-07-10 | DOG             | W   | 0.239      | 0.314        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     1.73 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            1 |     4220 | 2025-07-08 | FURY            | L   | 0.225      | -            | -                | -                | -         |    -4.85 | alecc, dearlucid, dpr, Mingovi, vinhy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($286.05)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-18 |      0.291 | $983.00        | $286.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
