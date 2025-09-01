### Roster Details<br />
Team Name: Insilio<br />
Roster: dwushka, faydett, kelieN, mag1k3Y, sugaR<br />
Global Rank: [264](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [137]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  401.0<br />
<br />
Final Rank Value (401.0) = Starting Rank Value (400.1) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3432 | 2025-03-22 | Leo             | L   | 0.114      | -            | -                | -                | -         |    -0.98 | dwushka, faydett, kelieN, mag1k3Y, sugaR |
|            4 |     3439 | 2025-03-22 | inputprayers    | W   | 0.113      | 0.624        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     2.34 | dwushka, faydett, kelieN, mag1k3Y, sugaR |
|            3 |     3596 | 2025-03-17 | Betera          | L   | 0.080      | -            | -                | -                | -         |    -0.18 | dwushka, faydett, kelieN, mag1k3Y, sugaR |
|            2 |     3841 | 2025-03-08 | Leo             | L   | 0.021      | -            | -                | -                | -         |    -0.18 | dwushka, faydett, kelieN, mag1k3Y, sugaR |
|            1 |     4000 | 2025-03-06 | Nuclear TigeRES | L   | 0.007      | -            | -                | -                | -         |    -0.08 | dwushka, faydett, kelieN, mag1k3Y, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
