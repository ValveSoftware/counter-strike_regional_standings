### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, draken, hampus, Ro1f, spooke<br />
Global Rank: [149](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [92]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  644.5<br />
<br />
Final Rank Value (644.5) = Starting Rank Value (639.6) + Head To Head Adjustments (4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 639.6
- 400 + ( ( 0.132 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 639.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3010 | 2024-11-23 | Alliance      | W   | 0.114      | 0.377        | 0.002 (0.000)    | 0.354 (0.015)    | 1 (0.114) |     2.26 | bobeksde, draken, hampus, Ro1f, spooke |
|            6 |     3018 | 2024-11-23 | Monte         | L   | 0.113      | -            | -                | -                | -         |    -1.27 | bobeksde, draken, hampus, Ro1f, spooke |
|            5 |     3065 | 2024-11-21 | Kappa Bar     | W   | 0.101      | 0.377        | 0.001 (0.000)    | 0.009 (0.000)    | 1 (0.101) |     1.38 | bobeksde, draken, hampus, Ro1f, spooke |
|            4 |     3067 | 2024-11-21 | Alliance      | W   | 0.100      | 0.377        | 0.002 (0.000)    | 0.354 (0.013)    | 1 (0.100) |     1.99 | bobeksde, draken, hampus, Ro1f, spooke |
|            3 |     3348 | 2024-11-10 | OG            | W   | 0.028      | 0.354        | 0.053 (0.001)    | 1.000 (0.010)    | 0 (0.000) |     0.73 | bobeksde, draken, hampus, Ro1f, spooke |
|            2 |     3383 | 2024-11-08 | Metizport     | L   | 0.015      | -            | -                | -                | -         |    -0.07 | bobeksde, draken, hampus, Ro1f, spooke |
|            1 |     3395 | 2024-11-08 | Zero Tenacity | L   | 0.012      | -            | -                | -                | -         |    -0.12 | bobeksde, draken, hampus, Ro1f, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,515.49)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.120 | $1,000.00      | $119.70         |
| 2024-11-23 |      0.114 | $11,343.00     | $1,295.40       |
| 2024-11-09 |      0.021 | $4,848.00      | $100.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
