### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [78](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [55]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  928.4<br />
<br />
Final Rank Value (928.4) = Starting Rank Value (857.3) + Head To Head Adjustments (71.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.436[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 857.3
- 400 + ( ( 0.233 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 857.3


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
|           21 |      464 | 2024-10-03 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -12.25 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      467 | 2024-10-03 | GUN5              | W   | 1.000      | 0.384        | 0.102 (0.039)    | 1.000 (0.384)    | 0 (0.000) |    21.09 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      511 | 2024-10-02 | Insilio           | W   | 1.000      | 0.384        | 0.040 (0.016)    | 0.696 (0.268)    | 0 (0.000) |    19.64 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      558 | 2024-10-01 | UNiTY             | W   | 1.000      | 0.333        | 0.047 (0.016)    | 0.453 (0.151)    | 0 (0.000) |    20.28 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |      946 | 2024-09-20 | Aurora Young Blud | W   | 0.979      | 0.384        | 0.014 (0.005)    | 0.637 (0.240)    | 0 (0.000) |    15.90 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |     1100 | 2024-09-15 | Permitta          | L   | 0.945      | -            | -                | -                | -         |   -12.52 | c0llins, Dragon, emi, Kind0, ROGA   |
|           15 |     1329 | 2024-09-07 | ex-Enterprise     | W   | 0.892      | 0.384        | 0.025 (0.009)    | 0.434 (0.149)    | 0 (0.000) |    12.57 | Dragon, emi, Kind0, ROGA, xicoz     |
|           14 |     1515 | 2024-09-01 | Rebels            | W   | 0.852      | 0.384        | 0.063 (0.020)    | 0.516 (0.169)    | 0 (0.000) |    18.05 | c0llins, Dragon, emi, Kind0, ROGA   |
|           13 |     3301 | 2024-07-13 | Nexus             | L   | 0.519      | -            | -                | -                | -         |   -10.00 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |     3350 | 2024-07-10 | Israel            | W   | 0.499      | -            | -                | -                | 0 (0.000) |     1.14 | c0llins, Dragon, emi, Kind0, VLDN   |
|           11 |     3361 | 2024-07-09 | North Macedonia   | W   | 0.493      | -            | -                | -                | 0 (0.000) |     1.13 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     3368 | 2024-07-09 | Turkey            | L   | 0.493      | -            | -                | -                | -         |   -13.54 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |     3910 | 2024-06-06 | Passion UA        | L   | 0.271      | -            | -                | -                | -         |    -1.89 | aidKiT, c0llins, Dragon, emi, xicoz |
|            8 |     3954 | 2024-06-05 | ex-Enterprise     | W   | 0.266      | 0.371        | 0.025 (0.002)    | 0.434 (0.043)    | 0 (0.000) |     3.96 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            7 |     4007 | 2024-06-04 | Passion UA        | L   | 0.258      | -            | -                | -                | -         |    -1.75 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     4058 | 2024-06-02 | Apogee            | W   | 0.245      | 0.371        | -                | 0.545 (0.049)    | 0 (0.000) |     3.52 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     4146 | 2024-05-30 | Permitta          | W   | 0.225      | 0.371        | 0.036 (0.003)    | 1.000 (0.083)    | -         |     4.45 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     4246 | 2024-05-25 | Zero Tenacity     | L   | 0.192      | -            | -                | -                | -         |    -1.45 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     4252 | 2024-05-25 | UNiTY             | W   | 0.191      | 0.371        | 0.047 (0.003)    | 0.453 (0.032)    | -         |     4.63 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     4265 | 2024-05-24 | ex-Guild Eagles   | L   | 0.185      | -            | -                | -                | -         |    -4.42 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     4367 | 2024-05-21 | kONO              | W   | 0.165      | 0.371        | 0.023 (0.001)    | -                | -         |     2.47 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,857.17)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-03 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-06 |      0.271 | $5,000.00      | $1,357.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
