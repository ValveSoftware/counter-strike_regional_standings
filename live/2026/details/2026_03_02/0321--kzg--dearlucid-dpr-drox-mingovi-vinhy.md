### Roster Details<br />
Team Name: KZG<br />
Roster: dearlucid, dpr, Drox, Mingovi, vinhy<br />
Global Rank: [321](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [45]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  465.3<br />
<br />
Final Rank Value (465.3) = Starting Rank Value (468.1) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.144[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.036<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 468.1
- 400 + ( ( 0.036 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 468.1


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
|           10 |     4045 | 2025-10-06 | Rooster         | L   | 0.218      | -            | -                | -                | -         |    -1.75 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|            9 |     4106 | 2025-10-05 | Mindfreak       | L   | 0.211      | -            | -                | -                | -         |    -1.85 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|            8 |     4715 | 2025-09-18 | Ground Zero     | L   | 0.098      | -            | -                | -                | -         |    -0.57 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            7 |     5042 | 2025-09-10 | FURY            | W   | 0.045      | 0.278        | 0.000 (0.000)    | 0.053 (0.001)    | 0 (0.000) |     0.77 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            6 |     5045 | 2025-09-10 | Rooster         | L   | 0.044      | -            | -                | -                | -         |    -0.36 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            5 |     5096 | 2025-09-09 | DanCompany      | W   | 0.038      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.49 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            4 |     5139 | 2025-09-08 | Ground Zero     | L   | 0.032      | -            | -                | -                | -         |    -0.18 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            3 |     5143 | 2025-09-08 | Animus Victoria | W   | 0.031      | 0.314        | 0.000 (0.000)    | 0.040 (0.000)    | 0 (0.000) |     0.52 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            2 |     5193 | 2025-09-06 | Ground Zero     | L   | 0.019      | -            | -                | -                | -         |    -0.11 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            1 |     5218 | 2025-09-05 | Mindfreak       | W   | 0.012      | 0.314        | 0.003 (0.000)    | 0.099 (0.000)    | 0 (0.000) |     0.26 | dearlucid, dpr, Drox, Mingovi, vinhy       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
