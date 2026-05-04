### Roster Details<br />
Team Name: Misa<br />
Roster: Ckanic, Mertowsk1, rim3, souv, Zuedsta<br />
Global Rank: [179](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [118]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  802.2<br />
<br />
Final Rank Value (802.2) = Starting Rank Value (738.7) + Head To Head Adjustments (63.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.7
- 400 + ( ( 0.183 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 738.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      247 | 2026-04-26 | CYBERSHOKE Prospects | L   | 1.000      | -            | -                | -                | -         |   -13.62 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|           13 |      318 | 2026-04-25 | aAa                  | L   | 1.000      | -            | -                | -                | -         |    -8.99 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|           12 |      391 | 2026-04-23 | 9INE                 | W   | 1.000      | 0.384        | 0.054 (0.021)    | 0.550 (0.211)    | 0 (0.000) |    29.20 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|           11 |      434 | 2026-04-22 | Subtop De France     | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.101 (0.039)    | 0 (0.000) |    15.58 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|           10 |     1479 | 2026-03-28 | TNT                  | L   | 0.955      | -            | -                | -                | -         |   -14.48 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            9 |     1563 | 2026-03-27 | ROUNDS               | W   | 0.948      | 0.400        | 0.002 (0.001)    | 0.067 (0.025)    | 0 (0.000) |    11.45 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            8 |     2212 | 2026-03-14 | Young Ninjas         | L   | 0.861      | -            | -                | -                | -         |   -10.88 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            7 |     2267 | 2026-03-13 | Inner Circle Academy | W   | 0.854      | 0.278        | 0.010 (0.002)    | 0.180 (0.043)    | 0 (0.000) |     9.91 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            6 |     2314 | 2026-03-12 | DONSTU               | L   | 0.848      | -            | -                | -                | -         |   -15.51 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            5 |     2443 | 2026-03-09 | TNT                  | W   | 0.828      | 0.143        | 0.016 (0.002)    | 0.323 (0.038)    | 0 (0.000) |    12.77 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            4 |     2513 | 2026-03-08 | yngods               | W   | 0.821      | 0.143        | 0.001 (0.000)    | 0.331 (0.039)    | 0 (0.000) |    10.51 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            3 |     2671 | 2026-03-05 | HAVU                 | W   | 0.801      | 0.143        | 0.003 (0.000)    | 0.499 (0.057)    | 0 (0.000) |    19.65 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            2 |     3727 | 2026-02-13 | magic                | L   | 0.666      | -            | -                | -                | -         |    -1.55 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            1 |     3787 | 2026-02-12 | Inner Circle         | W   | 0.658      | 0.384        | 0.083 (0.021)    | 0.453 (0.115)    | 1 (0.658) |    19.51 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,403.13)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.961 | $2,500.00      | $2,403.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
