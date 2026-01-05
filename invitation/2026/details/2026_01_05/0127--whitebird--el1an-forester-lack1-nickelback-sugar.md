### Roster Details<br />
Team Name: WHITEBIRD<br />
Roster: El1an, Forester, Lack1, NickelBack, sugaR<br />
Global Rank: [127](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [89]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  857.0<br />
<br />
Final Rank Value (857.0) = Starting Rank Value (803.6) + Head To Head Adjustments (53.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.379[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 803.6
- 400 + ( ( 0.204 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 803.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      104 | 2025-12-21 | K27       | L   | 1.000      | -            | -                | -                | -         |    -1.75 | El1an, Forester, Lack1, NickelBack, sugaR |
|            4 |      113 | 2025-12-21 | Oxuji     | W   | 1.000      | 0.406        | 0.012 (0.005)    | 0.124 (0.050)    | 1 (1.000) |    11.17 | El1an, Forester, Lack1, NickelBack, sugaR |
|            3 |      282 | 2025-12-09 | K27       | L   | 1.000      | -            | -                | -                | -         |    -1.68 | El1an, Forester, Lack1, NickelBack, sugaR |
|            2 |      288 | 2025-12-09 | ALLINNERS | W   | 1.000      | 0.377        | 0.007 (0.003)    | 0.124 (0.047)    | 0 (0.000) |    19.23 | El1an, Forester, Lack1, NickelBack, sugaR |
|            1 |      308 | 2025-12-08 | Nemiga    | W   | 1.000      | 0.377        | 0.085 (0.032)    | 0.673 (0.254)    | 0 (0.000) |    26.38 | El1an, Forester, Lack1, NickelBack, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,887.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      1.000 | $9,887.00      | $9,887.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
