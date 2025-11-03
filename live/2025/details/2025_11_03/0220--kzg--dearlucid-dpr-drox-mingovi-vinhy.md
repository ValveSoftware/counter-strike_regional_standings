### Roster Details<br />
Team Name: KZG<br />
Roster: dearlucid, dpr, Drox, Mingovi, vinhy<br />
Global Rank: [220](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [28]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  566.2<br />
<br />
Final Rank Value (566.2) = Starting Rank Value (612.7) + Head To Head Adjustments (-46.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.7
- 400 + ( ( 0.113 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 612.7


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
|           17 |      684 | 2025-10-06 | Rooster         | L   | 1.000      | -            | -                | -                | -         |    -9.66 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|           16 |      745 | 2025-10-05 | Mindfreak       | L   | 1.000      | -            | -                | -                | -         |   -15.74 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|           15 |     1354 | 2025-09-18 | Ground Zero     | L   | 0.891      | -            | -                | -                | -         |   -12.13 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           14 |     1681 | 2025-09-10 | FURY            | W   | 0.838      | 0.278        | 0.000 (0.000)    | 0.161 (0.037)    | 0 (0.000) |    10.08 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           13 |     1684 | 2025-09-10 | Rooster         | L   | 0.837      | -            | -                | -                | -         |    -8.85 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           12 |     1735 | 2025-09-09 | DanCompany      | W   | 0.831      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.89 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           11 |     1778 | 2025-09-08 | Ground Zero     | L   | 0.825      | -            | -                | -                | -         |   -11.59 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|           10 |     1782 | 2025-09-08 | Animus Victoria | W   | 0.824      | 0.314        | 0.000 (0.000)    | 0.120 (0.031)    | 0 (0.000) |    11.15 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            9 |     1832 | 2025-09-06 | Ground Zero     | L   | 0.812      | -            | -                | -                | -         |   -11.85 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            8 |     1857 | 2025-09-05 | Mindfreak       | W   | 0.805      | 0.314        | 0.001 (0.000)    | 0.294 (0.074)    | 0 (0.000) |    11.98 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            7 |     1881 | 2025-09-03 | Animus Victoria | L   | 0.792      | -            | -                | -                | -         |   -14.30 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            6 |     1897 | 2025-09-01 | Exsto           | W   | 0.778      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.78 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            5 |     2979 | 2025-07-17 | SemperFi        | L   | 0.472      | -            | -                | -                | -         |    -4.73 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            4 |     2982 | 2025-07-16 | Rooster         | L   | 0.470      | -            | -                | -                | -         |    -5.36 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            3 |     3030 | 2025-07-15 | Ground Zero     | W   | 0.458      | 0.314        | 0.003 (0.000)    | 0.213 (0.031)    | 0 (0.000) |     8.12 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            2 |     3149 | 2025-07-10 | DOG             | W   | 0.425      | 0.314        | 0.000 (0.000)    | 0.026 (0.003)    | 0 (0.000) |     3.18 | alecc, dearlucid, dpr, Mingovi, vinhy      |
|            1 |     3199 | 2025-07-08 | FURY            | L   | 0.411      | -            | -                | -                | -         |    -8.48 | alecc, dearlucid, dpr, Mingovi, vinhy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($469.53)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-18 |      0.478 | $983.00        | $469.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
