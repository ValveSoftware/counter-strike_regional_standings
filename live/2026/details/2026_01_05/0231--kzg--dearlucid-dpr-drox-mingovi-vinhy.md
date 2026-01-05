### Roster Details<br />
Team Name: KZG<br />
Roster: dearlucid, dpr, Drox, Mingovi, vinhy<br />
Global Rank: [231](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [32]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  598.6<br />
<br />
Final Rank Value (598.6) = Starting Rank Value (607.4) + Head To Head Adjustments (-8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.205[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 607.4
- 400 + ( ( 0.105 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 607.4


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
|           16 |     2265 | 2025-10-06 | Rooster         | L   | 0.592      | -            | -                | -                | -         |    -6.31 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|           15 |     2326 | 2025-10-05 | Mindfreak       | L   | 0.585      | -            | -                | -                | -         |    -3.08 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|           14 |     2935 | 2025-09-18 | Ground Zero     | L   | 0.471      | -            | -                | -                | -         |    -5.01 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           13 |     3262 | 2025-09-10 | FURY            | W   | 0.418      | 0.278        | 0.000 (0.000)    | 0.134 (0.016)    | 0 (0.000) |     4.89 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           12 |     3265 | 2025-09-10 | Rooster         | L   | 0.418      | -            | -                | -                | -         |    -4.60 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           11 |     3316 | 2025-09-09 | DanCompany      | W   | 0.412      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.95 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           10 |     3359 | 2025-09-08 | Ground Zero     | L   | 0.405      | -            | -                | -                | -         |    -4.34 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            9 |     3363 | 2025-09-08 | Animus Victoria | W   | 0.404      | 0.314        | 0.000 (0.000)    | 0.120 (0.015)    | 0 (0.000) |     4.97 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            8 |     3413 | 2025-09-06 | Ground Zero     | L   | 0.392      | -            | -                | -                | -         |    -4.26 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            7 |     3438 | 2025-09-05 | Mindfreak       | W   | 0.385      | 0.314        | 0.009 (0.001)    | 0.459 (0.055)    | 0 (0.000) |    10.60 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            6 |     3462 | 2025-09-03 | Animus Victoria | L   | 0.372      | -            | -                | -                | -         |    -7.16 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            5 |     3478 | 2025-09-01 | Exsto           | W   | 0.359      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.69 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            4 |     4560 | 2025-07-17 | SemperFi        | L   | 0.052      | -            | -                | -                | -         |    -0.43 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            3 |     4563 | 2025-07-16 | Rooster         | L   | 0.050      | -            | -                | -                | -         |    -0.58 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            2 |     4611 | 2025-07-15 | Ground Zero     | W   | 0.039      | 0.314        | 0.011 (0.000)    | 0.303 (0.004)    | 0 (0.000) |     0.82 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            1 |     4730 | 2025-07-10 | DOG             | W   | 0.006      | 0.314        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     0.04 | alecc, dearlucid, dpr, Mingovi, vinhy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56.95)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-18 |      0.058 | $983.00        | $56.95          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
