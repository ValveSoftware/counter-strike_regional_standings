### Roster Details<br />
Team Name: FOLHA AMARELA<br />
Roster: bnc, cerolzin, ckzao, f4stzin, RCF<br />
Global Rank: [180](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [39]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  705.4<br />
<br />
Final Rank Value (705.4) = Starting Rank Value (659.2) + Head To Head Adjustments (46.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.2
- 400 + ( ( 0.131 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 659.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1832 | 2025-10-17 | Keyd Stars     | L   | 0.667      | -            | -                | -                | -         |    -2.90 | bnc, cerolzin, ckzao, f4stzin, RCF |
|            4 |     1891 | 2025-10-15 | Galorys        | W   | 0.656      | 0.371        | 0.004 (0.001)    | 0.464 (0.113)    | 0 (0.000) |    15.91 | bnc, cerolzin, ckzao, f4stzin, RCF |
|            3 |     1990 | 2025-10-11 | GameHunters    | W   | 0.628      | 0.371        | 0.000 (0.000)    | 0.247 (0.057)    | 0 (0.000) |     8.25 | bnc, cerolzin, ckzao, f4stzin, RCF |
|            2 |     2057 | 2025-10-09 | KRÜ            | W   | 0.615      | 0.371        | 0.002 (0.000)    | 0.324 (0.074)    | 0 (0.000) |    11.57 | bnc, cerolzin, ckzao, f4stzin, RCF |
|            1 |     2166 | 2025-10-07 | Bounty Hunters | W   | 0.601      | 0.371        | 0.016 (0.004)    | 0.477 (0.106)    | 0 (0.000) |    13.32 | bnc, cerolzin, ckzao, f4stzin, RCF |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($506.41)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.675 | $750.00        | $506.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
