### Roster Details<br />
Team Name: Turkey<br />
Roster: EMSTAR, h0kz, imoRR, lugseN, scolleN<br />
Global Rank: [228](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [135]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  598.6<br />
<br />
Final Rank Value (598.6) = Starting Rank Value (594.9) + Head To Head Adjustments (3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 594.9
- 400 + ( ( 0.101 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 594.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1503 | 2024-11-15 | Norway    | L   | 0.479      | -            | -                | -                | -         |    -7.84 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            4 |     1511 | 2024-11-15 | Permitta  | L   | 0.478      | -            | -                | -                | -         |    -2.85 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            3 |     1522 | 2024-11-14 | Mindfreak | W   | 0.474      | 0.617        | 0.002 (0.001)    | 0.088 (0.026)    | 1 (0.474) |     9.25 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            2 |     1571 | 2024-11-13 | Metizport | W   | 0.466      | 0.617        | 0.075 (0.021)    | 0.636 (0.183)    | 1 (0.466) |    13.64 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            1 |     1575 | 2024-11-13 | Canada    | L   | 0.466      | -            | -                | -                | -         |    -8.52 | EMSTAR, h0kz, imoRR, lugseN, scolleN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
