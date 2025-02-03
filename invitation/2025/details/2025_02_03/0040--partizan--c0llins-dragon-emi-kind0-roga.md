### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [40](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [29]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1120.2<br />
<br />
Final Rank Value (1120.2) = Starting Rank Value (1146.9) + Head To Head Adjustments (-26.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.516[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.500[<sup>2</sup>](#table1)

The average of these factors is 0.385<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1146.9
- 400 + ( ( 0.385 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1146.9


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
|           21 |      757 | 2024-12-03 | 500             | L   | 0.787      | -            | -                | -                | -         |   -16.04 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      774 | 2024-12-02 | Arrow           | W   | 0.781      | 0.372        | 0.028 (0.008)    | 0.170 (0.049)    | 0 (0.000) |     3.85 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      821 | 2024-11-30 | UNiTY           | W   | 0.767      | 0.372        | 0.069 (0.020)    | 0.250 (0.071)    | 0 (0.000) |     4.67 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      853 | 2024-11-29 | CYBERSHOKE      | L   | 0.760      | -            | -                | -                | -         |   -20.75 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |      882 | 2024-11-27 | Lazer Cats      | W   | 0.747      | -            | -                | -                | 0 (0.000) |     1.31 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |     1066 | 2024-11-17 | Metizport       | W   | 0.679      | 0.617        | 0.185 (0.078)    | 0.791 (0.332)    | 1 (0.679) |    13.14 | c0llins, choiv7, Dragon, emi, Kind0 |
|           15 |     1073 | 2024-11-17 | GTZ             | L   | 0.678      | -            | -                | -                | -         |   -10.90 | c0llins, choiv7, Dragon, emi, Kind0 |
|           14 |     1094 | 2024-11-16 | los kogutos     | W   | 0.673      | 0.617        | 0.070 (0.029)    | 0.779 (0.324)    | 1 (0.673) |     6.32 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |     1122 | 2024-11-15 | Kitsune         | W   | 0.665      | -            | -                | -                | 1 (0.665) |     0.65 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |     1127 | 2024-11-15 | SINNERS Academy | L   | 0.665      | -            | -                | -                | -         |   -18.78 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |     1138 | 2024-11-14 | Czech Republic  | W   | 0.661      | 0.617        | -                | 0.120 (0.049)    | 1 (0.661) |     1.42 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |     1182 | 2024-11-13 | The Huns        | W   | 0.653      | 0.617        | 0.058 (0.023)    | 0.655 (0.264)    | 1 (0.653) |     7.08 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |     1187 | 2024-11-13 | Dusty Roots     | W   | 0.653      | 0.617        | 0.018 (0.007)    | 0.348 (0.140)    | 1 (0.653) |     2.59 | c0llins, choiv7, Dragon, emi, Kind0 |
|            8 |     2086 | 2024-10-03 | Johnny Speeds   | L   | 0.380      | -            | -                | -                | -         |    -8.46 | c0llins, Dragon, emi, Kind0, ROGA   |
|            7 |     2089 | 2024-10-03 | GUN5            | W   | 0.380      | 0.384        | 0.229 (0.033)    | 1.000 (0.146)    | 0 (0.000) |     4.31 | c0llins, Dragon, emi, Kind0, ROGA   |
|            6 |     2133 | 2024-10-02 | Insilio         | W   | 0.372      | 0.384        | 0.014 (0.002)    | 0.250 (0.036)    | -         |     1.47 | c0llins, Dragon, emi, Kind0, ROGA   |
|            5 |     2180 | 2024-10-01 | UNiTY           | W   | 0.365      | 0.333        | 0.069 (0.008)    | -                | -         |     2.28 | c0llins, Dragon, emi, Kind0, ROGA   |
|            4 |     2568 | 2024-09-20 | Chimera         | W   | 0.293      | 0.384        | 0.044 (0.005)    | 0.806 (0.091)    | -         |     1.93 | c0llins, Dragon, emi, Kind0, ROGA   |
|            3 |     2722 | 2024-09-15 | los kogutos     | L   | 0.259      | -            | -                | -                | -         |    -4.53 | c0llins, Dragon, emi, Kind0, ROGA   |
|            2 |     2951 | 2024-09-07 | ex-Enterprise   | W   | 0.206      | -            | -                | -                | -         |     0.85 | Dragon, emi, Kind0, ROGA, xicoz     |
|            1 |     3137 | 2024-09-01 | Rebels          | W   | 0.165      | -            | -                | -                | -         |     0.82 | c0llins, Dragon, emi, Kind0, ROGA   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,747.47)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.680 | $25,000.00     | $17,001.21      |
| 2024-10-03 |      0.380 | $12,500.00     | $4,746.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
