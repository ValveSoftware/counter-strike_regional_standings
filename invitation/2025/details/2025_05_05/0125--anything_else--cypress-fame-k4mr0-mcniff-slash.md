### Roster Details<br />
Team Name: anything else<br />
Roster: cypress, FAME, K4mr0, mcniff, Slash<br />
Global Rank: [125](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [26]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  682.4<br />
<br />
Final Rank Value (682.4) = Starting Rank Value (668.9) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 668.9
- 400 + ( ( 0.148 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 668.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      917 | 2025-03-23 | LOBOARMY         | L   | 0.917      | -            | -                | -                | -         |   -13.46 | cypress, FAME, K4mr0, mcniff, Slash |
|            4 |      956 | 2025-03-21 | Marca Registrada | W   | 0.903      | 0.372        | 0.008 (0.003)    | 0.174 (0.058)    | 0 (0.000) |    12.71 | cypress, FAME, K4mr0, mcniff, Slash |
|            3 |      990 | 2025-03-19 | Tsunami          | W   | 0.890      | 0.372        | 0.005 (0.002)    | 0.142 (0.047)    | 0 (0.000) |    12.73 | cypress, FAME, K4mr0, mcniff, Slash |
|            2 |     1032 | 2025-03-17 | Wanted Goons     | W   | 0.876      | 0.372        | 0.004 (0.001)    | 0.254 (0.083)    | 0 (0.000) |    14.68 | cypress, FAME, K4mr0, mcniff, Slash |
|            1 |     1160 | 2025-03-10 | Marca Registrada | L   | 0.830      | -            | -                | -                | -         |   -13.14 | cypress, FAME, K4mr0, mcniff, Slash |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,942.63)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.917 | $4,300.00      | $3,942.63       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
