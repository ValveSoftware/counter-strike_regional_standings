### Roster Details<br />
Team Name: Serbia<br />
Roster: c0llins, choiv7, Dragon, emi, Kind0<br />
Global Rank: [65](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [45]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  991.0<br />
<br />
Final Rank Value (991.0) = Starting Rank Value (936.2) + Head To Head Adjustments (54.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.227[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 936.2
- 400 + ( ( 0.269 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 936.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |        0 | 2024-11-13 | The Huns          | W   | 1.000      | 0.617        | 0.004 (0.003)    | 0.140 (0.087)    | 1 (1.000) |     6.04 | c0llins, choiv7, Dragon, emi, Kind0 |
|           22 |        5 | 2024-11-13 | Argentina         | W   | 1.000      | 0.617        | 0.002 (0.001)    | 0.302 (0.186)    | 1 (1.000) |     6.76 | c0llins, choiv7, Dragon, emi, Kind0 |
|           21 |      904 | 2024-10-03 | Johnny Speeds     | L   | 0.927      | -            | -                | -                | -         |   -14.29 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      907 | 2024-10-03 | GUN5              | W   | 0.926      | 0.384        | 0.051 (0.018)    | 1.000 (0.356)    | 0 (0.000) |    16.92 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      951 | 2024-10-02 | Insilio           | W   | 0.918      | 0.384        | 0.019 (0.007)    | 0.654 (0.231)    | 0 (0.000) |    15.39 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      998 | 2024-10-01 | UNiTY             | W   | 0.912      | 0.333        | 0.023 (0.007)    | 0.379 (0.115)    | 0 (0.000) |    14.60 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |     1386 | 2024-09-20 | Aurora Young Blud | W   | 0.840      | 0.384        | 0.020 (0.006)    | 0.652 (0.210)    | 0 (0.000) |    10.99 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |     1540 | 2024-09-15 | Permitta          | L   | 0.806      | -            | -                | -                | -         |   -10.03 | c0llins, Dragon, emi, Kind0, ROGA   |
|           15 |     1769 | 2024-09-07 | ex-Enterprise     | W   | 0.753      | 0.384        | 0.017 (0.005)    | 0.386 (0.112)    | 0 (0.000) |    10.63 | Dragon, emi, Kind0, ROGA, xicoz     |
|           14 |     1955 | 2024-09-01 | Rebels            | W   | 0.712      | 0.384        | 0.035 (0.010)    | 0.469 (0.128)    | 0 (0.000) |    12.35 | c0llins, Dragon, emi, Kind0, ROGA   |
|           13 |     3741 | 2024-07-13 | Nexus             | L   | 0.379      | -            | -                | -                | -         |    -7.17 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |     3790 | 2024-07-10 | Israel            | W   | 0.360      | -            | -                | -                | 0 (0.000) |     0.56 | c0llins, Dragon, emi, Kind0, VLDN   |
|           11 |     3801 | 2024-07-09 | North Macedonia   | W   | 0.354      | -            | -                | -                | 0 (0.000) |     0.55 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     3808 | 2024-07-09 | Turkey            | L   | 0.353      | -            | -                | -                | -         |   -10.21 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |     4350 | 2024-06-06 | Passion UA        | L   | 0.132      | -            | -                | -                | -         |    -1.64 | aidKiT, c0llins, Dragon, emi, xicoz |
|            8 |     4394 | 2024-06-05 | ex-Enterprise     | W   | 0.126      | 0.371        | 0.017 (0.001)    | -                | -         |     2.23 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            7 |     4447 | 2024-06-04 | Passion UA        | L   | 0.119      | -            | -                | -                | -         |    -1.48 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     4498 | 2024-06-02 | Apogee            | W   | 0.105      | 0.371        | -                | 0.467 (0.018)    | -         |     1.03 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     4586 | 2024-05-30 | Permitta          | W   | 0.085      | 0.371        | 0.030 (0.001)    | 1.000 (0.032)    | -         |     2.24 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     4686 | 2024-05-25 | Zero Tenacity     | L   | 0.053      | -            | -                | -                | -         |    -0.69 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     4692 | 2024-05-25 | UNiTY             | W   | 0.052      | -            | -                | -                | -         |     0.93 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     4705 | 2024-05-24 | ex-Guild Eagles   | L   | 0.046      | -            | -                | -                | -         |    -1.24 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     4807 | 2024-05-21 | kONO              | W   | 0.025      | -            | -                | -                | -         |     0.27 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,239.17)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-03 |      0.926 | $12,500.00     | $11,579.63      |
| 2024-06-06 |      0.132 | $5,000.00      | $659.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
