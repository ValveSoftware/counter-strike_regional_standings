### Roster Details<br />
Team Name: Strael Bora<br />
Roster: 5 Star, maddeN, newhope<br />
Global Rank: [335](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [200]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  462.3<br />
<br />
Final Rank Value (462.3) = Starting Rank Value (446.0) + Head To Head Adjustments (16.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 446.0
- 400 + ( ( 0.025 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 446.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1400 | 2026-03-29 | HAVU     | L   | 0.961      | -            | -                | -                | -         |    -2.05 | 5 Star, Cher1on, Heroic, maddeN, newhope |
|            4 |     1419 | 2026-03-29 | SINQU    | W   | 0.960      | 0.354        | 0.000 (0.000)    | 0.057 (0.019)    | 1 (0.960) |    19.34 | 5 Star, Cher1on, Heroic, maddeN, newhope |
|            3 |     1450 | 2026-03-29 | Sashi    | L   | 0.958      | -            | -                | -                | -         |    -0.63 | 5 Star, Cher1on, Heroic, maddeN, newhope |
|            2 |     5550 | 2025-11-20 | illwill  | L   | 0.100      | -            | -                | -                | -         |    -0.11 | 5 Star, LUXBRUUU, maddeN, newhope, Spiri |
|            1 |     5571 | 2025-11-20 | GenOne   | L   | 0.098      | -            | -                | -                | -         |    -0.28 | 5 Star, LUXBRUUU, maddeN, newhope, Spiri |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
