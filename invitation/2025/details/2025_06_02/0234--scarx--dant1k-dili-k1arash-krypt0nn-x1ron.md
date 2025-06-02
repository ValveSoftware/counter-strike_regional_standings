### Roster Details<br />
Team Name: ScarX<br />
Roster: Dant1k, Dili, k1araSh, KryPt0NN, X1RON<br />
Global Rank: [234](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [36]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  538.8<br />
<br />
Final Rank Value (538.8) = Starting Rank Value (500.2) + Head To Head Adjustments (38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.2
- 400 + ( ( 0.055 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 500.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1027 | 2025-04-10 | JiJieHao | L   | 0.850      | -            | -                | -                | -         |    -1.17 | Dant1k, Dili, k1araSh, KryPt0NN, X1RON |
|            5 |     1028 | 2025-04-10 | Eruption | W   | 0.849      | 0.143        | 0.018 (0.002)    | 0.266 (0.032)    | 0 (0.000) |    24.28 | Dant1k, Dili, k1araSh, KryPt0NN, X1RON |
|            4 |     1503 | 2025-03-28 | JiJieHao | L   | 0.765      | -            | -                | -                | -         |    -0.91 | Dant1k, Dili, k1araSh, KryPt0NN, X1RON |
|            3 |     1516 | 2025-03-28 | POWERmix | W   | 0.763      | 0.143        | 0.000 (0.000)    | 0.055 (0.006)    | 0 (0.000) |     9.13 | Dant1k, Dili, k1araSh, KryPt0NN, X1RON |
|            2 |     1578 | 2025-03-27 | st4rboys | W   | 0.757      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.14 | Dant1k, Dili, k1araSh, KryPt0NN, X1RON |
|            1 |     1589 | 2025-03-27 | JiJieHao | L   | 0.756      | -            | -                | -                | -         |    -0.82 | Dant1k, Dili, k1araSh, KryPt0NN, X1RON |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
