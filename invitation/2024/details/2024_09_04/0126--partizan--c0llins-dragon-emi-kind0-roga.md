### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [126](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [88]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  781.5<br />
<br />
Final Rank Value (781.5) = Starting Rank Value (748.9) + Head To Head Adjustments (32.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.9
- 400 + ( ( 0.176 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 748.9


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
|           15 |       87 | 2024-09-01 | Rebels          | W   | 1.000      | 0.384        | 0.029 (0.011)    | 0.639 (0.246)    | 0 (0.000) |    23.91 | c0llins, Dragon, emi, Kind0, ROGA   |
|           14 |     1873 | 2024-07-13 | Nexus           | L   | 0.847      | -            | -                | -                | -         |   -14.42 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |     1922 | 2024-07-10 | Israel          | W   | 0.827      | 0.143        | 0.000 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     2.90 | c0llins, Dragon, emi, Kind0, VLDN   |
|           12 |     1933 | 2024-07-09 | North Macedonia | W   | 0.821      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.91 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |     1940 | 2024-07-09 | Turkey          | L   | 0.820      | -            | -                | -                | -         |   -20.79 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     2482 | 2024-06-06 | Passion UA      | L   | 0.599      | -            | -                | -                | -         |    -3.69 | aidKiT, c0llins, Dragon, emi, xicoz |
|            9 |     2526 | 2024-06-05 | Enterprise      | W   | 0.593      | 0.371        | 0.039 (0.009)    | 0.719 (0.158)    | 0 (0.000) |    12.69 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            8 |     2579 | 2024-06-04 | Passion UA      | L   | 0.586      | -            | -                | -                | -         |    -3.36 | aidKiT, c0llins, Dragon, emi, xicoz |
|            7 |     2630 | 2024-06-02 | brazylijski luz | W   | 0.572      | 0.371        | 0.006 (0.001)    | 0.171 (0.036)    | 0 (0.000) |     9.05 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |     2718 | 2024-05-30 | Permitta        | W   | 0.552      | 0.371        | 0.032 (0.006)    | 0.988 (0.202)    | 0 (0.000) |    12.54 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     2818 | 2024-05-25 | Zero Tenacity   | L   | 0.520      | -            | -                | -                | -         |    -2.46 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     2824 | 2024-05-25 | UNiTY           | W   | 0.519      | 0.371        | 0.026 (0.005)    | 0.406 (0.078)    | 0 (0.000) |    11.59 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     2837 | 2024-05-24 | ex-Guild Eagles | L   | 0.513      | -            | -                | -                | -         |    -7.98 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     2939 | 2024-05-21 | kONO            | W   | 0.492      | 0.371        | 0.025 (0.005)    | 0.550 (0.100)    | 0 (0.000) |    10.11 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     3812 | 2024-04-18 | BetBoom         | L   | 0.273      | -            | -                | -                | -         |    -0.45 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,995.04)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
