### Roster Details<br />
Team Name: HAVENs<br />
Roster: Brens, FABEN, Pleb0rs, whitezins<br />
Global Rank: [328](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [217]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  514.2<br />
<br />
Final Rank Value (514.2) = Starting Rank Value (520.0) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.0
- 400 + ( ( 0.064 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 520.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1337 | 2026-09-29 | Inner Circle Academy | L   | 0.973      | -            | -                | -                | -         |    -1.52 | FABEN, ledzh1t, Loodi, Pleb0rs, whitezins  |
|            7 |     1342 | 2026-09-29 | KUUSAMO              | L   | 0.973      | -            | -                | -                | -         |    -7.07 | FABEN, ledzh1t, Loodi, Pleb0rs, whitezins  |
|            6 |     1348 | 2026-09-29 | INFURITY             | L   | 0.972      | -            | -                | -                | -         |    -7.30 | FABEN, ledzh1t, Loodi, Pleb0rs, whitezins  |
|            5 |     3698 | 2026-08-01 | The Last Resort      | L   | 0.579      | -            | -                | -                | -         |    -0.61 | Atoks1l, Brens, FABEN, Pleb0rs, whitezins  |
|            4 |     3705 | 2026-08-01 | Liquid               | L   | 0.578      | -            | -                | -                | -         |    -0.05 | Atoks1l, Brens, FABEN, Pleb0rs, whitezins  |
|            3 |     3859 | 2026-07-27 | ASTRAL               | L   | 0.546      | -            | -                | -                | -         |    -1.01 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            2 |     3861 | 2026-07-27 | Noir Verse           | W   | 0.546      | 0.303        | 0.003 (0.001)    | 0.707 (0.117)    | 1 (0.546) |    14.65 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            1 |     3867 | 2026-07-27 | Azuolas              | L   | 0.545      | -            | -                | -                | -         |    -2.86 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
