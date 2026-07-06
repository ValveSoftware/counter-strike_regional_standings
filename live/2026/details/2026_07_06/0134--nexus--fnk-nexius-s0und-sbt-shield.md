### Roster Details<br />
Team Name: Nexus<br />
Roster: fNk, Nexius, s0und, SBT, shield<br />
Global Rank: [134](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [92]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  879.2<br />
<br />
Final Rank Value (879.2) = Starting Rank Value (841.5) + Head To Head Adjustments (37.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.313[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 841.5
- 400 + ( ( 0.234 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 841.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      286 | 2026-06-14 | Alliance   | L   | 1.000      | -            | -                | -                | -         |    -2.10 | fNk, Nexius, s0und, SBT, shield |
|            4 |      291 | 2026-06-14 | Noir Verse | W   | 1.000      | 0.373        | 0.001 (0.000)    | 0.148 (0.055)    | 1 (1.000) |    13.38 | fNk, Nexius, s0und, SBT, shield |
|            3 |      311 | 2026-06-13 | Metizport  | L   | 1.000      | -            | -                | -                | -         |    -7.20 | fNk, Nexius, s0und, SBT, shield |
|            2 |      317 | 2026-06-13 | Alliance   | W   | 1.000      | 0.373        | 0.104 (0.039)    | 0.855 (0.319)    | 1 (1.000) |    29.67 | fNk, Nexius, s0und, SBT, shield |
|            1 |      329 | 2026-06-13 | PURE       | W   | 1.000      | 0.373        | 0.000 (0.000)    | 0.069 (0.026)    | 1 (1.000) |     3.99 | fNk, Nexius, s0und, SBT, shield |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
