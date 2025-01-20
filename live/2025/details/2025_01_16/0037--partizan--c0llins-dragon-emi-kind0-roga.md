### Roster Details<br />
Team Name: Partizan<br />
Roster: c0llins, Dragon, emi, Kind0, ROGA<br />
Global Rank: [37](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [26]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1172.0<br />
<br />
Final Rank Value (1172.0) = Starting Rank Value (1213.5) + Head To Head Adjustments (-41.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.516[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.569[<sup>2</sup>](#table1)

The average of these factors is 0.411<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1213.5
- 400 + ( ( 0.411 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1213.5


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
|           21 |      450 | 2024-12-03 | 500               | L   | 0.906      | -            | -                | -                | -         |   -18.82 | c0llins, Dragon, emi, Kind0, ROGA   |
|           20 |      467 | 2024-12-02 | Arrow             | W   | 0.900      | 0.372        | 0.026 (0.009)    | 0.161 (0.054)    | 0 (0.000) |     3.63 | c0llins, Dragon, emi, Kind0, ROGA   |
|           19 |      514 | 2024-11-30 | UNiTY             | W   | 0.885      | 0.372        | 0.070 (0.023)    | 0.282 (0.093)    | 0 (0.000) |     5.21 | c0llins, Dragon, emi, Kind0, ROGA   |
|           18 |      546 | 2024-11-29 | CYBERSHOKE        | L   | 0.879      | -            | -                | -                | -         |   -24.27 | c0llins, Dragon, emi, Kind0, ROGA   |
|           17 |      575 | 2024-11-27 | Lazer Cats        | W   | 0.865      | -            | -                | -                | 0 (0.000) |     1.20 | c0llins, Dragon, emi, Kind0, ROGA   |
|           16 |      759 | 2024-11-17 | Metizport         | W   | 0.798      | 0.617        | 0.181 (0.089)    | 0.788 (0.388)    | 1 (0.798) |    14.83 | c0llins, choiv7, Dragon, emi, Kind0 |
|           15 |      766 | 2024-11-17 | PEGADA            | L   | 0.797      | -            | -                | -                | -         |   -13.04 | c0llins, choiv7, Dragon, emi, Kind0 |
|           14 |      787 | 2024-11-16 | los kogutos       | W   | 0.791      | 0.617        | 0.072 (0.035)    | 0.843 (0.412)    | 1 (0.791) |     6.41 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |      815 | 2024-11-15 | Kitsune           | W   | 0.784      | -            | -                | -                | 1 (0.784) |     0.60 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |      820 | 2024-11-15 | SINNERS Academy   | L   | 0.784      | -            | -                | -                | -         |   -22.57 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |      831 | 2024-11-14 | Czech Republic    | W   | 0.780      | 0.617        | -                | 0.114 (0.055)    | 1 (0.780) |     1.37 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |      875 | 2024-11-13 | The Huns          | W   | 0.772      | 0.617        | 0.056 (0.027)    | 0.353 (0.168)    | 1 (0.772) |     5.72 | c0llins, choiv7, Dragon, emi, Kind0 |
|            9 |      880 | 2024-11-13 | Dusty Roots       | W   | 0.772      | 0.617        | 0.015 (0.007)    | 0.353 (0.168)    | 1 (0.772) |     2.34 | c0llins, choiv7, Dragon, emi, Kind0 |
|            8 |     1779 | 2024-10-03 | Johnny Speeds     | L   | 0.499      | -            | -                | -                | -         |   -11.51 | c0llins, Dragon, emi, Kind0, ROGA   |
|            7 |     1782 | 2024-10-03 | GUN5              | W   | 0.498      | 0.384        | 0.224 (0.043)    | 1.000 (0.191)    | 0 (0.000) |     5.21 | c0llins, Dragon, emi, Kind0, ROGA   |
|            6 |     1826 | 2024-10-02 | Insilio           | W   | 0.490      | 0.384        | -                | 0.303 (0.057)    | -         |     1.83 | c0llins, Dragon, emi, Kind0, ROGA   |
|            5 |     1873 | 2024-10-01 | UNiTY             | W   | 0.484      | 0.333        | 0.070 (0.011)    | -                | -         |     2.92 | c0llins, Dragon, emi, Kind0, ROGA   |
|            4 |     2261 | 2024-09-20 | Aurora Young Blud | W   | 0.411      | 0.384        | 0.045 (0.007)    | 0.839 (0.133)    | -         |     2.34 | c0llins, Dragon, emi, Kind0, ROGA   |
|            3 |     2415 | 2024-09-15 | los kogutos       | L   | 0.377      | -            | -                | -                | -         |    -7.07 | c0llins, Dragon, emi, Kind0, ROGA   |
|            2 |     2644 | 2024-09-07 | ex-Enterprise     | W   | 0.325      | -            | -                | -                | -         |     1.25 | Dragon, emi, Kind0, ROGA, xicoz     |
|            1 |     2830 | 2024-09-01 | Rebels            | W   | 0.284      | 0.384        | 0.035 (0.004)    | -                | -         |     0.98 | c0llins, Dragon, emi, Kind0, ROGA   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,192.95)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.799 | $25,000.00     | $19,964.86      |
| 2024-10-03 |      0.498 | $12,500.00     | $6,228.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
