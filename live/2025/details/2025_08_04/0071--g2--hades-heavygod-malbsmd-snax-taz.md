### Roster Details<br />
Team Name: G2<br />
Roster: hades, HeavyGod, malbsMd, Snax, TaZ<br />
Global Rank: [71](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [49]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  904.4<br />
<br />
Final Rank Value (904.4) = Starting Rank Value (881.2) + Head To Head Adjustments (23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.143[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.2
- 400 + ( ( 0.254 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 881.2


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
|            5 |     1264 | 2025-05-13 | Ninjas in Pyjamas | L   | 0.651      | -            | -                | -                | -         |    -0.98 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            4 |     1302 | 2025-05-13 | BIG               | W   | 0.644      | 1.000        | 0.181 (0.117)    | 0.372 (0.240)    | 1 (0.644) |    17.39 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            3 |     1318 | 2025-05-12 | M80               | W   | 0.639      | 1.000        | 0.122 (0.078)    | 0.766 (0.490)    | 1 (0.639) |    17.22 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            2 |     1340 | 2025-05-11 | ODDIK             | L   | 0.634      | -            | -                | -                | -         |    -8.50 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            1 |     1380 | 2025-05-10 | MIBR              | L   | 0.625      | -            | -                | -                | -         |    -1.96 | hades, HeavyGod, malbsMd, Snax, TaZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,247.91)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.680 | $31,250.00     | $21,247.91      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
