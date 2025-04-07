### Roster Details<br />
Team Name: ex-Enterprise<br />
Roster: bajmi, Demho, ex1st, mwlky, Sobol<br />
Global Rank: [179](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [113]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  628.9<br />
<br />
Final Rank Value (628.9) = Starting Rank Value (623.4) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.036[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 623.4
- 400 + ( ( 0.121 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 623.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2890 | 2024-10-26 | Illuminar  | W   | 0.114      | 0.303        | 0.003 (0.000)    | 0.108 (0.004)    | 1 (0.114) |     2.05 | bajmi, Demho, ex1st, mwlky, Sobol |
|            4 |     2910 | 2024-10-26 | Sangal     | W   | 0.112      | 0.303        | 0.014 (0.000)    | 0.148 (0.005)    | 1 (0.112) |     2.37 | bajmi, Demho, ex1st, mwlky, Sobol |
|            3 |     2914 | 2024-10-26 | Insomnia   | W   | 0.112      | 0.303        | 0.001 (0.000)    | 0.002 (0.000)    | 1 (0.112) |     1.49 | bajmi, Demho, ex1st, mwlky, Sobol |
|            2 |     3145 | 2024-10-13 | Passion UA | L   | 0.027      | -            | -                | -                | -         |    -0.13 | bajmi, Demho, ex1st, mwlky, Sobol |
|            1 |     3164 | 2024-10-12 | Illuminar  | L   | 0.020      | -            | -                | -                | -         |    -0.27 | bajmi, Demho, ex1st, mwlky, Sobol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($345.56)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.114 | $3,027.00      | $345.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
