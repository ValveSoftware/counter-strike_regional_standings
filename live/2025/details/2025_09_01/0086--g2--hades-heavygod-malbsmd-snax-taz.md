### Roster Details<br />
Team Name: G2<br />
Roster: hades, HeavyGod, malbsMd, Snax, TaZ<br />
Global Rank: [86](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  857.0<br />
<br />
Final Rank Value (857.0) = Starting Rank Value (837.8) + Head To Head Adjustments (19.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 837.8
- 400 + ( ( 0.228 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 837.8


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
|            5 |     1954 | 2025-05-13 | Ninjas in Pyjamas | L   | 0.464      | -            | -                | -                | -         |    -0.61 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            4 |     1992 | 2025-05-13 | BIG               | W   | 0.458      | 1.000        | 0.136 (0.062)    | 0.414 (0.190)    | 1 (0.458) |    12.16 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            3 |     2008 | 2025-05-12 | M80               | W   | 0.453      | 1.000        | 0.125 (0.057)    | 0.822 (0.372)    | 1 (0.453) |    12.42 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            2 |     2030 | 2025-05-11 | ODDIK             | L   | 0.447      | -            | -                | -                | -         |    -3.12 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            1 |     2070 | 2025-05-10 | MIBR              | L   | 0.438      | -            | -                | -                | -         |    -1.65 | hades, HeavyGod, malbsMd, Snax, TaZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,417.88)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.493 | $31,250.00     | $15,417.88      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
