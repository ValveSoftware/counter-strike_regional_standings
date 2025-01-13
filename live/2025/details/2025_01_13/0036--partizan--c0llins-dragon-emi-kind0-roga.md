### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [36](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [25]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1187.8<br />
<br />
Final Rank Value (1187.8) = Starting Rank Value (1221.8) + Head To Head Adjustments (-34.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.570[<sup>2</sup>](#table1)

The average of these factors is 0.414<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1221.8
- 400 + ( ( 0.414 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1221.8


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
|           22 |        0 | 2025-01-13 | SINNERS           | W   | 1.000      | 0.143        | 0.103 (0.015)    | 0.698 (0.100)    | 0 (0.000) |     9.98 | c0llins, Dragon, emi, Kind0, ROGA   |
|           21 |      423 | 2024-12-03 | 500               | L   | 0.928      | -            | -                | -                | -         |   -19.18 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      440 | 2024-12-02 | Arrow             | W   | 0.922      | 0.372        | 0.026 (0.009)    | -                | 0 (0.000) |     3.62 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      487 | 2024-11-30 | UNiTY             | W   | 0.908      | 0.372        | 0.070 (0.024)    | 0.285 (0.096)    | 0 (0.000) |     5.29 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      519 | 2024-11-29 | CYBERSHOKE        | L   | 0.901      | -            | -                | -                | -         |   -24.54 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |      548 | 2024-11-27 | Lazer Cats        | W   | 0.887      | -            | -                | -                | 0 (0.000) |     1.20 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |      732 | 2024-11-17 | Metizport         | W   | 0.820      | 0.617        | 0.179 (0.091)    | 0.801 (0.406)    | 1 (0.820) |    14.81 | c0llins, choiv7, Dragon, emi, Kind0 |
|           15 |      739 | 2024-11-17 | PEGADA            | L   | 0.819      | -            | -                | -                | -         |   -13.65 | c0llins, choiv7, Dragon, emi, Kind0 |
|           14 |      760 | 2024-11-16 | los kogutos       | W   | 0.814      | 0.617        | 0.072 (0.036)    | 0.851 (0.428)    | 1 (0.814) |     6.39 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |      788 | 2024-11-15 | Kitsune           | W   | 0.806      | -            | -                | -                | 1 (0.806) |     0.59 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |      793 | 2024-11-15 | SINNERS Academy   | L   | 0.806      | -            | -                | -                | -         |   -23.27 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |      804 | 2024-11-14 | Czech Republic    | W   | 0.802      | 0.617        | -                | 0.113 (0.056)    | 1 (0.802) |     1.37 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |      848 | 2024-11-13 | The Huns          | W   | 0.794      | 0.617        | 0.055 (0.027)    | 0.347 (0.170)    | 1 (0.794) |     5.66 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |      853 | 2024-11-13 | Dusty Roots       | W   | 0.794      | 0.617        | 0.015 (0.007)    | 0.354 (0.173)    | 1 (0.794) |     2.34 | c0llins, choiv7, Dragon, emi, Kind0 |
|            8 |     1752 | 2024-10-03 | Johnny Speeds     | L   | 0.521      | -            | -                | -                | -         |   -12.05 | c0llins, Dragon, emi, Kind0, ROGA   |
|            7 |     1755 | 2024-10-03 | GUN5              | W   | 0.521      | 0.384        | 0.218 (0.044)    | 1.000 (0.200)    | -         |     5.32 | c0llins, Dragon, emi, Kind0, ROGA   |
|            6 |     1799 | 2024-10-02 | Insilio           | W   | 0.513      | 0.384        | -                | 0.312 (0.061)    | -         |     1.97 | c0llins, Dragon, emi, Kind0, ROGA   |
|            5 |     1846 | 2024-10-01 | UNiTY             | W   | 0.506      | 0.333        | 0.070 (0.012)    | -                | -         |     3.01 | c0llins, Dragon, emi, Kind0, ROGA   |
|            4 |     2234 | 2024-09-20 | Aurora Young Blud | W   | 0.434      | 0.384        | 0.045 (0.007)    | 0.841 (0.140)    | -         |     2.42 | c0llins, Dragon, emi, Kind0, ROGA   |
|            3 |     2388 | 2024-09-15 | los kogutos       | L   | 0.400      | -            | -                | -                | -         |    -7.66 | c0llins, Dragon, emi, Kind0, ROGA   |
|            2 |     2617 | 2024-09-07 | ex-Enterprise     | W   | 0.347      | -            | -                | -                | -         |     1.32 | Dragon, emi, Kind0, ROGA, xicoz     |
|            1 |     2803 | 2024-09-01 | Rebels            | W   | 0.306      | -            | -                | -                | -         |     1.04 | c0llins, Dragon, emi, Kind0, ROGA   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,031.51)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.821 | $25,000.00     | $20,523.90      |
| 2024-10-03 |      0.521 | $12,500.00     | $6,507.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
