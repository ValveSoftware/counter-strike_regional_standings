### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [118](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [83]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  798.0<br />
<br />
Final Rank Value (798.0) = Starting Rank Value (763.3) + Head To Head Adjustments (34.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 763.3
- 400 + ( ( 0.186 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 763.3


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
|           17 |       82 | 2024-09-15 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -10.79 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |      311 | 2024-09-07 | ex-Enterprise   | W   | 1.000      | 0.384        | 0.040 (0.015)    | 0.654 (0.251)    | 0 (0.000) |    17.52 | Dragon, emi, Kind0, ROGA, xicoz     |
|           15 |      497 | 2024-09-01 | Rebels          | W   | 1.000      | 0.384        | 0.063 (0.024)    | 0.682 (0.262)    | 0 (0.000) |    24.67 | c0llins, Dragon, emi, Kind0, ROGA   |
|           14 |     2283 | 2024-07-13 | Nexus           | L   | 0.754      | -            | -                | -                | -         |   -13.09 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |     2332 | 2024-07-10 | Israel          | W   | 0.734      | 0.143        | 0.000 (0.000)    | 0.028 (0.003)    | 0 (0.000) |     2.48 | c0llins, Dragon, emi, Kind0, VLDN   |
|           12 |     2343 | 2024-07-09 | North Macedonia | W   | 0.728      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.48 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |     2350 | 2024-07-09 | Turkey          | L   | 0.728      | -            | -                | -                | -         |   -18.67 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     2892 | 2024-06-06 | Passion UA      | L   | 0.506      | -            | -                | -                | -         |    -3.08 | aidKiT, c0llins, Dragon, emi, xicoz |
|            9 |     2936 | 2024-06-05 | ex-Enterprise   | W   | 0.500      | 0.371        | 0.040 (0.007)    | 0.654 (0.121)    | 0 (0.000) |    10.39 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            8 |     2989 | 2024-06-04 | Passion UA      | L   | 0.493      | -            | -                | -                | -         |    -2.81 | aidKiT, c0llins, Dragon, emi, xicoz |
|            7 |     3040 | 2024-06-02 | Apogee          | W   | 0.479      | 0.371        | 0.009 (0.002)    | 0.365 (0.065)    | 0 (0.000) |     8.03 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     3128 | 2024-05-30 | Permitta        | W   | 0.460      | 0.371        | 0.031 (0.005)    | 0.979 (0.167)    | 0 (0.000) |    10.24 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     3228 | 2024-05-25 | Zero Tenacity   | L   | 0.427      | -            | -                | -                | -         |    -1.92 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     3234 | 2024-05-25 | UNiTY           | W   | 0.426      | 0.371        | 0.025 (0.004)    | 0.362 (0.057)    | 0 (0.000) |     9.02 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     3247 | 2024-05-24 | ex-Guild Eagles | L   | 0.420      | -            | -                | -                | -         |    -7.22 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     3349 | 2024-05-21 | kONO            | W   | 0.400      | 0.371        | 0.030 (0.004)    | 0.553 (0.082)    | 0 (0.000) |     7.90 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     4222 | 2024-04-18 | BetBoom         | L   | 0.181      | -            | -                | -                | -         |    -0.45 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,530.72)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
