### Roster Details<br />
Team Name: QUAZAR<br />
Roster: 1zz, gehji, kaiori, newt<br />
Global Rank: [290](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [174]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  518.4<br />
<br />
Final Rank Value (518.4) = Starting Rank Value (507.3) + Head To Head Adjustments (11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.3
- 400 + ( ( 0.057 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 507.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      999 | 2026-02-06 | VP.Prodigy | L   | 1.000      | -            | -                | -                | -         |    -6.84 | 1zz, gehji, kaiori, Ne1XXX, newt  |
|            4 |     1079 | 2026-02-03 | Bebop      | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.634 (0.244)    | 0 (0.000) |    27.80 | 1zz, gehji, kaiori, Ne1XXX, newt  |
|            3 |     1098 | 2026-02-02 | VP.Prodigy | L   | 1.000      | -            | -                | -                | -         |    -6.30 | 1zz, gehji, kaiori, Ne1XXX, newt  |
|            2 |     3088 | 2025-11-03 | Fire Flux  | L   | 0.407      | -            | -                | -                | -         |    -1.84 | 1zz, gehji, kaiori, n4mb3r5, newt |
|            1 |     3553 | 2025-10-21 | BC.Game    | L   | 0.318      | -            | -                | -                | -         |    -1.67 | 1zz, gehji, kaiori, n4mb3r5, newt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
