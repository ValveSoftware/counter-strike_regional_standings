### Roster Details<br />
Team Name: Serbia<br />
Roster: c0llins, choiv7, Dragon, emi, Kind0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [124](../standings_global.md)<br />
Regional Rank: [86]( ../standings_europe.md)<br />
Final Rank Value:  796.0<br />
<br />
Final Rank Value (796.0) = Starting Rank Value (774.9) + Head To Head Adjustments (21.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 774.9
- 400 + ( ( 0.185 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 774.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      427 | 2024-07-13 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -18.72 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |      476 | 2024-07-10 | Israel          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     2.88 | c0llins, Dragon, emi, Kind0, VLDN   |
|           12 |      487 | 2024-07-09 | North Macedonia | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.004 (0.001)    | 0 (0.000) |     4.43 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |      494 | 2024-07-09 | Turkey          | L   | 1.000      | -            | -                | -                | -         |   -26.06 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     1036 | 2024-06-06 | Passion UA      | L   | 0.878      | -            | -                | -                | -         |    -6.35 | aidKiT, c0llins, Dragon, emi, xicoz |
|            9 |     1080 | 2024-06-05 | Enterprise      | W   | 0.873      | 0.371        | 0.050 (0.016)    | 0.646 (0.209)    | 0 (0.000) |    18.32 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            8 |     1133 | 2024-06-04 | Passion UA      | L   | 0.865      | -            | -                | -                | -         |    -5.70 | aidKiT, c0llins, Dragon, emi, xicoz |
|            7 |     1184 | 2024-06-02 | brazylijski luz | W   | 0.852      | 0.371        | 0.010 (0.003)    | 0.300 (0.095)    | 0 (0.000) |    15.15 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     1272 | 2024-05-30 | Permitta        | W   | 0.832      | 0.371        | 0.032 (0.010)    | 0.790 (0.244)    | 0 (0.000) |    17.35 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     1372 | 2024-05-25 | Zero Tenacity   | L   | 0.799      | -            | -                | -                | -         |    -4.01 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     1378 | 2024-05-25 | UNiTY           | W   | 0.798      | 0.371        | 0.032 (0.010)    | 0.342 (0.101)    | 0 (0.000) |    18.69 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     1391 | 2024-05-24 | ex-Guild Eagles | L   | 0.792      | -            | -                | -                | -         |    -9.91 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     1493 | 2024-05-21 | kONO            | W   | 0.772      | 0.371        | 0.036 (0.010)    | 0.559 (0.160)    | 0 (0.000) |    15.35 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     2366 | 2024-04-18 | BetBoom         | L   | 0.553      | -            | -                | -                | -         |    -0.36 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,392.29)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
