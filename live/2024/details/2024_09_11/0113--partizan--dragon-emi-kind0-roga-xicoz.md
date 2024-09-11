### Roster Details<br />
Team Name: Partizan<br />
Roster: Dragon, emi, Kind0, ROGA, xicoz<br />
Global Rank: [113](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [80]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  784.4<br />
<br />
Final Rank Value (784.4) = Starting Rank Value (747.5) + Head To Head Adjustments (36.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.090[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.5
- 400 + ( ( 0.179 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 747.5


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
|           15 |      106 | 2024-09-07 | Enterprise      | W   | 1.000      | 0.384        | 0.039 (0.015)    | 0.673 (0.258)    | 0 (0.000) |    17.51 | Dragon, emi, Kind0, ROGA, xicoz     |
|           14 |      292 | 2024-09-01 | Rebels          | W   | 1.000      | 0.384        | 0.028 (0.011)    | 0.670 (0.258)    | 0 (0.000) |    24.06 | c0llins, Dragon, emi, Kind0, ROGA   |
|           13 |     2078 | 2024-07-13 | Nexus           | L   | 0.800      | -            | -                | -                | -         |   -13.45 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |     2127 | 2024-07-10 | Israel          | W   | 0.780      | 0.143        | 0.000 (0.000)    | 0.029 (0.003)    | 0 (0.000) |     2.96 | c0llins, Dragon, emi, Kind0, VLDN   |
|           11 |     2138 | 2024-07-09 | North Macedonia | W   | 0.774      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.97 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     2145 | 2024-07-09 | Turkey          | L   | 0.774      | -            | -                | -                | -         |   -19.34 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |     2687 | 2024-06-06 | Passion UA      | L   | 0.552      | -            | -                | -                | -         |    -3.30 | aidKiT, c0llins, Dragon, emi, xicoz |
|            8 |     2784 | 2024-06-04 | Passion UA      | L   | 0.539      | -            | -                | -                | -         |    -3.16 | aidKiT, c0llins, Dragon, emi, xicoz |
|            7 |     2835 | 2024-06-02 | Apogee          | W   | 0.525      | 0.371        | 0.006 (0.001)    | 0.264 (0.051)    | 0 (0.000) |     8.61 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     2923 | 2024-05-30 | Permitta        | W   | 0.506      | 0.371        | 0.032 (0.006)    | 0.936 (0.175)    | 0 (0.000) |    11.29 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     3023 | 2024-05-25 | Zero Tenacity   | L   | 0.473      | -            | -                | -                | -         |    -2.19 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     3029 | 2024-05-25 | UNiTY           | W   | 0.472      | 0.371        | 0.026 (0.005)    | 0.379 (0.066)    | 0 (0.000) |    10.16 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     3042 | 2024-05-24 | ex-Guild Eagles | L   | 0.466      | -            | -                | -                | -         |    -7.58 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     3144 | 2024-05-21 | kONO            | W   | 0.446      | 0.371        | 0.025 (0.004)    | 0.512 (0.085)    | 0 (0.000) |     8.84 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     4017 | 2024-04-18 | BetBoom         | L   | 0.227      | -            | -                | -                | -         |    -0.47 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,760.56)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
