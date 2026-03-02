### Roster Details<br />
Team Name: BIG Academy<br />
Roster: doni, JBOEN, prosus, tripex17, w1dow<br />
Global Rank: [243](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [154]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  614.9<br />
<br />
Final Rank Value (614.9) = Starting Rank Value (552.2) + Head To Head Adjustments (62.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.2
- 400 + ( ( 0.080 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 552.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1439 | 2026-01-22 | Nemesis       | L   | 0.940      | -            | -                | -                | -         |    -0.94 | doni, JBOEN, prosus, tripex17, w1dow |
|            4 |     1460 | 2026-01-21 | 9INE          | L   | 0.935      | -            | -                | -                | -         |    -0.58 | doni, JBOEN, prosus, tripex17, w1dow |
|            3 |     1492 | 2026-01-21 | FUT           | W   | 0.933      | 0.143        | 0.369 (0.049)    | 0.578 (0.077)    | 0 (0.000) |    29.21 | doni, JBOEN, prosus, tripex17, w1dow |
|            2 |     1581 | 2026-01-17 | GenOne        | W   | 0.907      | 0.143        | 0.030 (0.004)    | 0.692 (0.090)    | 0 (0.000) |    26.71 | doni, JBOEN, prosus, tripex17, w1dow |
|            1 |     1593 | 2026-01-17 | gothboiclique | W   | 0.907      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.29 | doni, JBOEN, prosus, tripex17, w1dow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
