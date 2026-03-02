### Roster Details<br />
Team Name: M1X KS<br />
Roster: Dementor, gejmzilla, Lewis, tripey, v1w<br />
Global Rank: [242](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [153]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  616.5<br />
<br />
Final Rank Value (616.5) = Starting Rank Value (595.9) + Head To Head Adjustments (20.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.308[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.9
- 400 + ( ( 0.104 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 595.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      196 | 2026-02-24 | HYPERSPIRIT       | L   | 1.000      | -            | -                | -                | -         |    -8.45 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            4 |      200 | 2026-02-24 | Insiders          | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     6.92 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            3 |      214 | 2026-02-24 | HYPERSPIRIT       | L   | 1.000      | -            | -                | -                | -         |    -8.51 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            2 |      965 | 2026-02-07 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.55 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            1 |     1005 | 2026-02-06 | 3DMAX             | W   | 1.000      | 0.143        | 0.401 (0.057)    | 0.298 (0.043)    | 0 (0.000) |    31.20 | Dementor, gejmzilla, Lewis, tripey, v1w |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
