### Roster Details<br />
Team Name: Haunted House<br />
Roster: fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf<br />
Global Rank: [227](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [29]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  706.6<br />
<br />
Final Rank Value (706.6) = Starting Rank Value (682.0) + Head To Head Adjustments (24.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.238[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.120[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.0
- 400 + ( ( 0.152 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 682.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      210 | 2026-04-27 | BORING PLAYERS  | L   | 1.000      | -            | -                | -                | -         |   -13.90 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|           13 |      271 | 2026-04-26 | Kaleido         | L   | 1.000      | -            | -                | -                | -         |    -6.32 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|           12 |     1187 | 2026-04-01 | DEPO            | L   | 0.979      | -            | -                | -                | -         |    -7.61 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|           11 |     1253 | 2026-03-31 | Legion          | W   | 0.974      | 0.143        | 0.002 (0.000)    | 0.214 (0.030)    | 0 (0.000) |    15.89 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|           10 |     1278 | 2026-03-31 | THE UNIT        | W   | 0.973      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.49 | fr0k, icyvl0ne, malinov, SasukeQO, Schwarzkopf |
|            9 |     1795 | 2026-03-23 | Alter Ego       | L   | 0.919      | -            | -                | -                | -         |    -7.20 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            8 |     1846 | 2026-03-22 | NSN             | W   | 0.913      | 0.333        | 0.000 (0.000)    | 0.097 (0.029)    | 0 (0.000) |     8.49 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            7 |     1906 | 2026-03-21 | Change The Game | W   | 0.906      | 0.333        | 0.007 (0.002)    | 0.247 (0.075)    | 0 (0.000) |    20.06 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            6 |     1965 | 2026-03-20 | Just Swing      | L   | 0.900      | -            | -                | -                | -         |    -9.55 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            5 |     4807 | 2026-01-04 | HOTU            | L   | 0.399      | -            | -                | -                | -         |    -0.30 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |
|            4 |     4818 | 2026-01-04 | ALLINNERS       | W   | 0.398      | 0.303        | 0.000 (0.000)    | 0.026 (0.003)    | 1 (0.398) |     5.65 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |
|            3 |     4837 | 2026-01-03 | NOVAQ           | W   | 0.395      | 0.303        | 0.017 (0.002)    | 0.387 (0.046)    | 1 (0.395) |    10.30 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |
|            2 |     4850 | 2026-01-03 | Winners         | W   | 0.392      | 0.303        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.392) |     3.49 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |
|            1 |     4854 | 2026-01-02 | Omega           | L   | 0.391      | -            | -                | -                | -         |    -0.93 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($299.89)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-04 |      0.400 | $750.00        | $299.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
