### Roster Details<br />
Team Name: wwaves<br />
Roster: daria, kira, olya, sakura, sckrafft<br />
Global Rank: [256](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [161]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  592.0<br />
<br />
Final Rank Value (592.0) = Starting Rank Value (601.6) + Head To Head Adjustments (-9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 601.6
- 400 + ( ( 0.107 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 601.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3416 | 2025-10-24 | Black Mold   | L   | 0.342      | -            | -                | -                | -         |    -5.29 | daria, kira, olya, sakura, sckrafft      |
|            6 |     3633 | 2025-10-16 | Sakura       | L   | 0.289      | -            | -                | -                | -         |    -2.19 | lerkiish, lvmylv, olya, sakura, sckrafft |
|            5 |     3883 | 2025-10-08 | Little Bocks | W   | 0.235      | 0.520        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.86 | kira, lvmylv, olya, sakura, sckrafft     |
|            4 |     4190 | 2025-10-02 | Ghost        | L   | 0.196      | -            | -                | -                | -         |    -2.89 | daria, kira, olya, sakura, sckrafft      |
|            3 |     4530 | 2025-09-24 | FlyQuest RED | L   | 0.143      | -            | -                | -                | -         |    -1.46 | daria, kira, olya, sakura, sckrafft      |
|            2 |     4721 | 2025-09-17 | Nocturnal    | L   | 0.096      | -            | -                | -                | -         |    -1.47 | daria, kira, olya, sakura, sckrafft      |
|            1 |     4953 | 2025-09-11 | Lotus fe     | W   | 0.056      | 0.520        | 0.001 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     0.90 | daria, kira, olya, sakura, sckrafft      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($376.88)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-24 |      0.343 | $1,100.00      | $376.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
