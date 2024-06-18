### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, hotd0g , m4tthi, meztal, MOREE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [185](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  583.5<br />
<br />
Final Rank Value (583.5) = Starting Rank Value (531.4) + Head To Head Adjustments (52.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.4
- 400 + ( ( 0.065 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 531.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      985 | 2024-05-18 | GUN5            | L   | 0.996      | -            | -                | -                | -         |    -3.07 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            9 |     1021 | 2024-05-17 | Rare Atom       | W   | 0.990      | 0.143        | 0.000 (0.000)    | 0.218 (0.031)    | 0 (0.000) |    18.93 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            8 |     1182 | 2024-05-14 | Heimo           | W   | 0.967      | 0.143        | 0.010 (0.001)    | 0.064 (0.009)    | 0 (0.000) |    21.51 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            7 |     1202 | 2024-05-13 | Rare Atom       | L   | 0.961      | -            | -                | -                | -         |   -10.38 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            6 |     1739 | 2024-04-19 | JANO            | L   | 0.802      | -            | -                | -                | -         |    -7.86 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            5 |     1792 | 2024-04-18 | RUBY            | L   | 0.795      | -            | -                | -                | -         |    -2.24 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            4 |     1828 | 2024-04-17 | Sampi           | W   | 0.788      | 0.143        | 0.045 (0.005)    | 0.837 (0.094)    | 0 (0.000) |    22.98 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            3 |     2184 | 2024-04-04 | KOI             | L   | 0.702      | -            | -                | -                | -         |    -0.65 | dan1, meztal, MOREE, shushan, tN1R    |
|            2 |     2687 | 2024-03-11 | MOUZ NXT        | L   | 0.540      | -            | -                | -                | -         |    -0.74 | dan1, Libido, meztal, MOREE, ultimate |
|            1 |     2728 | 2024-03-09 | Astralis Talent | W   | 0.528      | 0.303        | 0.009 (0.001)    | 0.093 (0.015)    | 0 (0.000) |    13.63 | dan1, Libido, meztal, MOREE, ultimate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
