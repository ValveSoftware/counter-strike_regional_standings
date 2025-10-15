### Roster Details<br />
Team Name: G2<br />
Roster: hades, HeavyGod, malbsMd, Snax, TaZ<br />
Global Rank: [120](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [78]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  777.8<br />
<br />
Final Rank Value (777.8) = Starting Rank Value (772.4) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.046[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.4
- 400 + ( ( 0.190 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 772.4


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
|            6 |      146 | 2025-09-29 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -7.55 | Grashog, hades, Kylar, Snax, TaZ    |
|            5 |     3085 | 2025-05-13 | Ninjas in Pyjamas | L   | 0.231      | -            | -                | -                | -         |    -0.07 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            4 |     3123 | 2025-05-13 | BIG               | W   | 0.225      | 1.000        | 0.100 (0.022)    | 0.718 (0.161)    | 1 (0.225) |     6.91 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            3 |     3139 | 2025-05-12 | M80               | W   | 0.219      | 1.000        | 0.164 (0.036)    | 0.684 (0.150)    | 1 (0.219) |     6.40 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            2 |     3161 | 2025-05-11 | ODDIK             | L   | 0.214      | -            | -                | -                | -         |    -0.20 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            1 |     3201 | 2025-05-10 | MIBR              | L   | 0.205      | -            | -                | -                | -         |    -0.10 | hades, HeavyGod, malbsMd, Snax, TaZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,128.22)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.260 | $31,250.00     | $8,128.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
