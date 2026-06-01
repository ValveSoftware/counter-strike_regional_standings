### Roster Details<br />
Team Name: EMPIRE<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [213](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [50]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  724.6<br />
<br />
Final Rank Value (724.6) = Starting Rank Value (757.1) + Head To Head Adjustments (-32.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.176[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 757.1
- 400 + ( ( 0.187 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 757.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     1138 | 2026-04-27 | Wanted Goons   | L   | 0.970      | -            | -                | -                | -         |   -17.84 | BAGEL, C0C0, KmZ, no1nx, Shawta   |
|           21 |     1188 | 2026-04-26 | ex-Aether      | L   | 0.963      | -            | -                | -                | -         |   -18.46 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           20 |     1258 | 2026-04-25 | LAG            | L   | 0.956      | -            | -                | -                | -         |    -6.43 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           19 |     1262 | 2026-04-25 | Foxtrot        | W   | 0.955      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.955) |     3.41 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           18 |     1278 | 2026-04-25 | LAG            | L   | 0.954      | -            | -                | -                | -         |    -6.54 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           17 |     1533 | 2026-04-15 | regain         | L   | 0.889      | -            | -                | -                | -         |   -12.54 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           16 |     1588 | 2026-04-12 | Aether         | W   | 0.870      | 0.333        | 0.004 (0.001)    | 0.239 (0.069)    | 0 (0.000) |    14.85 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           15 |     1666 | 2026-04-09 | Clockwork      | W   | 0.850      | 0.333        | 0.000 (0.000)    | 0.027 (0.008)    | 0 (0.000) |     3.34 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           14 |     1722 | 2026-04-07 | FarmVille      | L   | 0.836      | -            | -                | -                | -         |   -12.14 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           13 |     2022 | 2026-04-02 | Zomblers       | L   | 0.802      | -            | -                | -                | -         |   -14.16 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           12 |     2124 | 2026-04-01 | LAG            | W   | 0.796      | 0.333        | 0.033 (0.009)    | 0.681 (0.181)    | 0 (0.000) |    21.52 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           11 |     2456 | 2026-03-28 | LAG            | L   | 0.769      | -            | -                | -                | -         |    -3.00 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           10 |     2472 | 2026-03-28 | Wanted Goons   | L   | 0.768      | -            | -                | -                | -         |   -16.07 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            9 |     2487 | 2026-03-28 | LAG            | L   | 0.767      | -            | -                | -                | -         |    -3.34 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            8 |     2502 | 2026-03-28 | Wanted Goons   | W   | 0.766      | 0.354        | 0.000 (0.000)    | 0.163 (0.044)    | 1 (0.766) |     7.78 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            7 |     2537 | 2026-03-27 | ClayMakers     | W   | 0.762      | 0.398        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.51 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            6 |     3012 | 2026-03-18 | Zomblers       | W   | 0.703      | 0.143        | 0.012 (0.001)    | 0.436 (0.044)    | 0 (0.000) |    11.28 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            5 |     3103 | 2026-03-16 | Wanted Goons   | W   | 0.690      | 0.143        | 0.000 (0.000)    | 0.163 (0.016)    | 0 (0.000) |     7.38 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            4 |     3188 | 2026-03-14 | insane players | W   | 0.676      | 0.143        | 0.013 (0.001)    | 0.372 (0.036)    | 0 (0.000) |     9.90 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            3 |     5825 | 2026-01-03 | Reign Above    | L   | 0.208      | -            | -                | -                | -         |    -5.31 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            2 |     5832 | 2026-01-03 | NRG            | L   | 0.207      | -            | -                | -                | -         |    -0.49 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            1 |     6004 | 2025-12-12 | LAG            | L   | 0.063      | -            | -                | -                | -         |    -0.20 | BAGEL, C0C0, Laboom, no1nx, twigs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,549.01)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.775 | $2,000.00      | $1,549.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
