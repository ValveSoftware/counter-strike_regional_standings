### Roster Details<br />
Team Name: ALLINNERS<br />
Roster: buster, demente, kade0, kumao, noni<br />
Global Rank: [132](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [90]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  849.4<br />
<br />
Final Rank Value (849.4) = Starting Rank Value (896.5) + Head To Head Adjustments (-47.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.414[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.5
- 400 + ( ( 0.250 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 896.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       41 | 2026-01-04 | DEPO      | L   | 1.000      | -            | -                | -                | -         |   -14.85 | buster, dako, kade0, kumao, SNk     |
|           12 |       65 | 2026-01-03 | Omega     | W   | 1.000      | 0.303        | 0.012 (0.004)    | 0.164 (0.050)    | 1 (1.000) |    17.19 | buster, dako, kade0, kumao, SNk     |
|           11 |       71 | 2026-01-03 | ALTAY     | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.38 | buster, dako, kade0, kumao, SNk     |
|           10 |       74 | 2026-01-03 | NOVAQ     | L   | 1.000      | -            | -                | -                | -         |   -13.85 | buster, dako, kade0, kumao, SNk     |
|            9 |      233 | 2025-12-13 | Omega     | L   | 1.000      | -            | -                | -                | -         |   -14.91 | buster, demente, kade0, kumao, noni |
|            8 |      252 | 2025-12-12 | NOVAQ     | L   | 1.000      | -            | -                | -                | -         |   -14.25 | buster, demente, kade0, kumao, noni |
|            7 |      285 | 2025-12-09 | Oxuji     | L   | 1.000      | -            | -                | -                | -         |   -22.14 | buster, demente, kade0, kumao, noni |
|            6 |      288 | 2025-12-09 | WHITEBIRD | L   | 1.000      | -            | -                | -                | -         |   -19.23 | buster, demente, kade0, kumao, noni |
|            5 |      310 | 2025-12-08 | Ursa      | W   | 1.000      | 0.377        | 0.002 (0.001)    | 0.041 (0.016)    | 0 (0.000) |     6.42 | buster, demente, kade0, kumao, noni |
|            4 |      473 | 2025-11-30 | HOTU      | L   | 0.960      | -            | -                | -                | -         |    -1.19 | buster, demente, kade0, kumao, noni |
|            3 |      479 | 2025-11-30 | Omega     | W   | 0.959      | 0.282        | 0.012 (0.003)    | 0.164 (0.044)    | 1 (0.959) |    13.80 | buster, demente, kade0, kumao, noni |
|            2 |      510 | 2025-11-29 | HOTU      | L   | 0.954      | -            | -                | -                | -         |    -1.11 | buster, demente, kade0, kumao, noni |
|            1 |      531 | 2025-11-29 | Omega     | W   | 0.952      | 0.282        | 0.012 (0.003)    | 0.164 (0.044)    | 1 (0.952) |    14.71 | buster, demente, kade0, kumao, noni |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,135.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-04 |      1.000 | $500.00        | $500.00         |
| 2025-12-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-12-09 |      1.000 | $989.00        | $989.00         |
| 2025-11-30 |      0.960 | $673.00        | $646.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
